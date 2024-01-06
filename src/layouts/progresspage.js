import React, { useEffect, useState } from "react";
import helpers from "../helpers/helpers";
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/react';

const ProgressPage = ({ moods, user }) => {
    const [userMoods, updateMoods] = useState({});
    const [primaryMood, updatePrimaryMood] = useState('');
    const [primaryMoodExists, updatePrimaryMoodExists] = useState(true);
    const [loading, setLoading] = useState(true);
    const [supportingText, updateSupportingText] = useState('');
    const [supportingResource, updateSupportingResource] = useState('');
    const [link, updateLink] = useState('');

    const supportingTextArray = [
        {
            text: `Lately you've been feeling ${primaryMood}. It's great that you're maintaining a balanced emotional state. Embracing this sense of calm can be a good opportunity to reflect on your journey and plan future steps.`,
            resource : "We suggest checking out The Gender Identity Center, which offers a variety of resources for education, support, and community engagement. They provide workshops, support groups, and counseling services that can be beneficial in exploring your identity and goals in a supportive environment. Engaging with such resources can help deepen your understanding of yourself and foster a sense of community.",
            link: "https://www.genderidentitycenter.com/"
        },
        {
            text: `Lately you've been feeling ${primaryMood}.` + " It's okay to experience these emotions, and it\'s important to know that you're not alone. Recognizing your feelings is a brave step towards self-care.",
            resource: "We recommend exploring Trans Lifeline, a peer support service run by trans people, for trans people. They offer emotional support and can guide you to relevant resources. Additionally, their hotline is a safe space to express your feelings and receive understanding and care from those who truly empathize with your journey.",
            link: "https://translifeline.org/"
        },
        {
            text: `Lately you've been feeling ${primaryMood}.` + " It's important to acknowledge and understand your anger. Remember, it's okay to feel this way, and there are constructive ways to manage and express these emotions.",
            resource: "We recommend exploring resources offered by The Trevor Project. They provide crisis intervention and suicide prevention services to LGBTQ+ young people. Their website offers various tools and guides on managing intense emotions like anger. Additionally, their confidential hotline and chat services provide a safe space to talk about your feelings with compassionate counselors who understand the unique challenges faced by the transgender community.",
            link: "https://www.thetrevorproject.org/"
        },
        {
            text: `Lately you've been feeling ${primaryMood}.` + " It's wonderful to hear that you're experiencing joy and positivity in your journey. Embracing and sharing this happiness can be uplifting for both you and those around you.",
            resource: "While you're in this positive state, consider exploring PFLAG. PFLAG offers resources and support for LGBTQ+ individuals and their families. It's a great platform to connect with a supportive community, share your positive experiences, and perhaps inspire others. Their local chapters and events can be a fantastic way to engage with others who are also celebrating their journey and victories.",
            link: "https://pflag.org/"
        },
        {
            text: "We're sorry, something went wrong. Please navigate back to the homepage and try again.",
            resource: "Error 400",
            link: "#"
        },
        {
            text: "You do not have any mood data",
            resource: "Please update your mood and check back.",
            link: "#"
        }
    ]

    // useEffect(() => {
    //     updateMoods(moods);
    //     console.log(moods);
    //     if(moods.length !== 0){
    //         updatePrimaryMood(Object.keys(moods).reduce((a, b) => moods[a] > moods[b] ? a : b));
    //     }
    // }, [])

    useEffect(() => {
        updateChartData();
    }, [user.username])

    const [chartData, setChartData] = useState({
        labels: ['Happy', 'Sad', 'Angry', 'Neutral'],
        datasets: [
          {
            label: 'Your Mood',
            data: [0, 0, 0, 0],
            backgroundColor: ['#66b266', '#b2b2b2', '#ff6666', '#6666ff'],
            borderColor: ['Black', 'Black', 'Black', 'Black'],
            borderWidth: 3,
          },
        ],
      });

    const updateChartData = async () => {
        try {
          const response = await helpers.moods(user.username);
          //console.log(response);

          if(response.statusCode === 200){
              
              const moodCounts = Object.entries(response)
              .filter(([key]) => ['angry', 'happy', 'neutral', 'sad'].includes(key))
              .reduce((acc, [key, value]) => {
                acc[key] = value;
                return acc;
              }, {});
        
              const newChartData = {
                ...chartData,
                datasets: [
                  {
                    ...chartData.datasets[0],
                    data: Object.values(moodCounts),
                  },
                ],
              };
        
            setChartData(newChartData);
            const allZero = Object.values(moodCounts).every(value => value === 0);

            if (allZero) {
                updatePrimaryMood('no mood data');
                updatePrimaryMoodExists(false);
            } else {
                const result = Object.keys(moodCounts).reduce((a, b) => moodCounts[a] > moodCounts[b] ? a : b);
                updatePrimaryMood(result);
                setSupportingText(result);
            }
              setLoading(false);
          }
    
        } catch (error) {
          console.error('Error updating chart data:', error);
        }
    
      };

      const setSupportingText = (primaryMood) => {
        if(primaryMood === 'sad') {
            updateSupportingText(supportingTextArray[1].text)
            updateSupportingResource(supportingTextArray[1].resource)
            updateLink(supportingTextArray[1].link)
          } else if (primaryMood === 'neutral'){
            updateSupportingText(supportingTextArray[0].text)
            updateSupportingResource(supportingTextArray[0].resource)
            updateLink(supportingTextArray[0].link)
          } else if (primaryMood === 'angry'){
            updateSupportingText(supportingTextArray[2].text)
            updateSupportingResource(supportingTextArray[2].resource)
            updateLink(supportingTextArray[2].link)
          } else if (primaryMood === 'happy'){
            updateSupportingText(supportingTextArray[3].text)
            updateSupportingResource(supportingTextArray[3].resource)
            updateLink(supportingTextArray[3].link)
          } else if (primaryMood === ''){
            updateSupportingText(supportingTextArray[4].text)
            updateSupportingResource(supportingTextArray[4].resource)
            updateLink(supportingTextArray[4].link)
          } else if (primaryMood === 'no mood data'){
            updateSupportingText(supportingTextArray[5].text)
            updateSupportingResource(supportingTextArray[5].resource)
            updateLink(supportingTextArray[5].link)
          }
      }



    return (
        <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
        <div className="col">
            <div className="card h-100">
            <div className="card-body p-0">
                <h5 className="card-title text-center purple-bg p-3 white-text">Mood Moments</h5>
                <h6 className="bold text-center mb-0 mt-3">Overview</h6>
                { loading ? (
                    <div className="text-center mt-4">
                        <ClipLoader color="#6610f2" loading={loading} css={spinnerStyle} size={35} />
                    </div>
                ) : (
                    <div>
                    <p className="card-text p-3 text-center">
                      {/* {primaryMood !== 'no mood data' && (
                        <span className="bold">{supportingText}</span>
                      )} */}
                      {primaryMood === 'no mood data' ? (
                        <span className="">{primaryMood}</span>
                      ) : (
                        <span>{supportingText}</span>
                      )}
                    </p>
                    {primaryMood !== 'no mood data' && (
                      <>
                        <h6 className="bold text-center mb-0">Resources</h6>
                        <p className="p-3 text-center">{supportingResource}</p>
                        <p className="text-center"><a href={link} className="text-center">Check It Out</a></p>
                      </>
                    )}
                  </div>
                )}
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
            <div className="card-body p-0">
                <h5 className="card-title text-center purple-bg p-3 white-text">Voice Depth</h5>
                <p className="card-text p-3">This is a short card.</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
            <div className="card-body p-0">
                <h5 className="card-title text-center purple-bg p-3 white-text">Facial Hair</h5>
                <p className="card-text p-3">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
            <div className="card-body p-0">
                <h5 className="card-title text-center purple-bg p-3 white-text">Body Strength</h5>
                <p className="card-text p-3">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
            <div className="card-body p-0">
                <h5 className="card-title text-center purple-bg p-3 white-text">Emotional Wellbeing</h5>
                <p className="card-text p-3">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
            <div className="card-body p-0">
                <h5 className="card-title text-center purple-bg p-3 white-text">Social State</h5>
                <p className="card-text p-3">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
        </div>
        </div>
    )

}

const spinnerStyle = css`
  display: block;
  margin: auto;
`;

export default ProgressPage;