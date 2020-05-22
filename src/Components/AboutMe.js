import React from "react";
import mma from "../Media/joe-mma.png";
import lunge from "../Media/side-lunge.png";
import sidehang from "../Media/sidehang.png"

const AboutMe = () => {
  return (
    <div className="content-position2">
      <h1 className="text2 heading-size">About Me</h1>
      <div className="underline"/>
      <div className="flex">
        <div className="text-orientation container darkText">
          <p>
            I enjoy seeing my clients progress their physical capabilities. I
            believe that improvements don’t come without hard work and that the
            right attitude is the key to unlocking your potential. I have a wide
            range of experience in Martial Arts from being part of the England
            Karate squad at age 15, to training in Thai Boxing, Brazilian
            Jujitsu (BJJ) and Boxing. ​
          </p>
          <p>
            I specialize in Functional Movements with basic Pilates and
            incorporate fat burning, strength training, core stability,
            Calisthenics (body weight training), circuit training and padwork
            into my client’s workouts. ​{" "}
          </p>
          <p>
            I'm also trained in Thai Massage and Sports Massage which helps to
            relieve physical and emotional tension, improves sleep and
            flexibility and creates greater awareness of body and mind,
            releasing blocked energy.
          </p>
          <div>
            <div>
              <h2>PERSONAL TRAINING</h2>
              <p>
                I motivate clients by setting goals and providing feedback and
                accountability to clients. I also measure client's strengths and
                weaknesses with fitness assessments. These fitness assessments
                may also be performed before and after an exercise program to
                measure client's improvements in physical fitness. I also
                educate clients in many other aspects of wellness besides
                exercise, including general health and nutrition guidelines.
              </p>
            </div>
            <div>
              <h2>QUALIFICATIONS</h2>
              <ul>
                <p> Level 2 Gym Instructor</p>

                <p>Level 3 Personal Trainer</p>

                <p>Level 3 Diploma in Exercise Referral</p>

                <p>Level 4 Diploma in Exercise Specialist (Low Back Pain)</p>

                <p>Sports Massage Therapy Level 3</p>

                <p>Sports Massage Therapy Level 4</p>

                <p>PACE Instructor (Posture Analysis & Corrective Exercise)</p>

                <p>Client Lifestyle & Fitness Assessment</p>

                <p>Nutrition & Weight-management</p>

                <p>Training in Different Environments</p>

                <p>Kettle-bell Qualified </p>
              </ul>
            </div>
            <div>
              <h2>MASSAGE THERAPY</h2>
              <p>
                Sports massage is designed to assist in correcting problems and
                imbalances in soft tissue that are caused from repetitive and
                strenuous physical activity and trauma. The application of
                sports massage, prior to and after exercise, may enhance
                performance, aid recovery and prevent injury.
              </p>
            </div>
          </div>
        </div>
        <div display="flex" flexDirection="column">
          <img className="mma" src={mma} alt="oh no!" />
          <img className="mma" src={lunge} alt="oh no!" />
          <img className="mma" src={sidehang} alt="oh no!" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
