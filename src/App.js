import logo from './logo.svg';
import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretDown } from '@fortawesome/free-solid-svg-icons';

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';

import picMeOnBoat from './meOnBoat.jpg';
import picPondering from './pondering.jpg';
import picMeInShade from './meInShade.jpg';
import picMeAndSled from './meAndSled.jpg';
import picMatrix from './matrix.jpg';
import picCoopAward from './meGettingAward.png';

// colour palette
// https://coolors.co/d8d8f6-b18fcf-978897-494850-2c2c34

function App() {
  /*   const scrollElement = document.getElementById('scrollElement');

  window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
          scrollElement.style.display = 'block';
      } else {
          scrollElement.style.display = 'none';
      }
  }); */

  return (
    <div className="App">
      <div
        id="scrollElement"
        style={{ zIndex: 2, position: 'fixed', bottom: 20 }}
        className="animate-bounce motion-safe"
      >
        <FontAwesomeIcon
          icon={faSquareCaretDown}
          style={{ color: '#FFFFFF' }}
          className="h-10 transition-opacity ease-in duration-700 opacity-100 hover:opacity-0"
        />
      </div>
      <script src="script.js"></script>
      <header className="App-header" style={{ zIndex: 3 }}>
        <div className="p-5 flex flex-row items-center">
          <img
            src={picMeInShade}
            alt="me in the shade"
            className="mx-auto h-64 md:h-80 flex rounded-[14px] shadow-2xl mt-8"
          />
        </div>
        <div className="text-3xl md:text-7xl text-black font-semibold mt-8 mb-2">
          Matthew Lim
        </div>
        <div className="text-3xl md:text-5xl text-black font-semibold mb-8 mt-2">
          Tutoring
        </div>

        <div className="text-xl md:text-3xl text-black font-semibold">
          <code className="text-[#B18FCF] animate-pulse-slow">99.65 </code> Atar
        </div>

        <div className="text-xl md:text-3xl text-black font-semibold">
          <code className="text-[#B18FCF] animate-pulse-slow">$80,000 </code>{' '}
          Scholarship
        </div>

        <div className="text-xl md:text-3xl text-black font-semibold">
          <code className="text-[#B18FCF] animate-pulse-slow">2022 </code> Grad
        </div>

        <div className="text-xl md:text-3xl text-black font-semibold">
          <code className="text-[#B18FCF] animate-pulse-slow">1 Year </code>{' '}
          Tutoring Experience
        </div>
        <div className="text-xl md:text-3xl text-black font-semibold">
          <code className="text-[#B18FCF] animate-pulse-slow">
            Tutoring Centre{' '}
          </code>{' '}
          Teaching Experience
        </div>

        <div className="text-xl md:text-3xl text-black font-semibold mt-6">
          <div>I teach years 7-12</div>
          <code className="text-[#b18fcf]">
            Maths Advanced, Maths Extension 1, Maths Extension 2, Physics,
            Chemistry{' '}
          </code>{' '}
        </div>

        <div className="text-xl md:text-3xl text-black font-semibold mt-6">
          <div>My contact details</div>
          <code className="text-[#b18fcf]">mattlsixhundred</code>
          <code className="text-[#b18fcf]">@gmail.com</code>
        </div>

        <div className="text-xl md:text-3xl text-black font-semibold">
          <code className="text-[#b18fcf]">0444 529 505 </code>
        </div>
      </header>
      <div className="bg-white p-20">
        <div className="flex flex-row">
          <div>
            <div className="text-xl md:text-4xl text-[#2c2c34] p-6">
              Academia is not just about numbers, formulas, or reactions; it's
              about unlocking the incredible potential within each student.
            </div>
            <div className="text-xl md:text-4xl text-[#2c2c34] p-6">
              I've walked the challenging path of learning these subjects, and I
              understand the frustration and awe that can come with it.{' '}
            </div>

            <div className="text-2xl md:text-4xl text-[#2c2c34] p-6">
              <div className="text-[#B18FCF]">
                My mission is to be more than a tutor{' '}
              </div>
              <div>
                — I want to be your ally, your cheerleader, and your mentor on
                this journey.
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 flex flex-row items-center">
          <img
            src={picMeAndSled}
            alt="me in the shade"
            className="mx-auto h-64 flex rounded-[14px] shadow-2xl mt-8"
          />
        </div>

        <div>
          <div className="text-xl md:text-3xl text-[#2c2c34] p-4">
            I believe in depth over breadth. I don't like to spread myself thin,
            and I want to ensure that my impact is not just extensive but deeply
            meaningful.
          </div>
          <div className="text-xl md:text-3xl text-[#2c2c34] p-4">
            Accordingly, I limit the number of clients I take on.
          </div>
        </div>

        <div className="p-5 flex flex-row items-center">
          <img
            src={picPondering}
            alt="me in the shade"
            className="mx-auto h-96 flex rounded-[14px] shadow-2xl mt-8"
          />
        </div>

        <div>
          <div className="text-xl md:text-4xl text-[#B18FCF] p-4">
            My rates are as follows. I am happy to negotiate.
          </div>
          <div className="text-xl md:text-4xl text-[#2c2c34] p-4">
            <code className="text-[#B18FCF]">Online (1 on 1) </code>- $55/hr
          </div>

          <div className="text-xl md:text-4xl text-[#2c2c34] p-4">
            <code className="text-[#B18FCF]">In Person (1 on 1) </code>- $80/hr
            (min 2 hours per session)
          </div>

          <div className="text-xl md:text-4xl text-[#2c2c34] p-4">
            <code className="text-[#B18FCF]">Group </code>- Consult for pricing
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-row items-center">
        <img
          src={picCoopAward}
          alt="me in the shade"
          className="mx-auto h-96 flex rounded-[14px] shadow-2xl mt-8"
        />
      </div>

      <div className="bg-white p-20">
        <div className="text-xl md:text-4xl text-[#B18FCF] p-4 font-bold">
          How will I help you?
        </div>
        <div className="text-xl md:text-3xl text-[#2C2C34] p-4">
          I ended year 12 with 1st in Physics, 2nd in Extension 1 Maths, 2nd in
          Extension 2 Maths, and 3rd in Chemistry.
        </div>
        <div className="text-xl md:text-3xl text-[#2C2C34] p-4">
          But I was not always a top student. I struggled with my studies before
          year 11 and 12. I did not make the cut for the accelerated class.
        </div>

        <div className="text-xl md:text-3xl text-[#2C2C34] p-4">
          It took me a long time to realize that I was not a bad student. I was
          just studying in a way that did not work for me.
        </div>

        <div className="text-xl md:text-3xl text-[#2C2C34] p-4">
          I hope to help find your rythm and your style of learning.
        </div>
      </div>

      <div className="p-4 flex flex-row items-center">
        <img
          src={picMatrix}
          alt="me in the shade"
          className="mx-auto h-64 flex rounded-[14px] shadow-2xl mt-8"
        />
      </div>

      <div className="bg-white p-20">
        <div className="text-xl md:text-4xl text-[#B18FCF] p-4 font-bold">
          Referral Program
        </div>
        <div className="text-xl md:text-4xl text-[#2C2C34] p-4">
          If you refer a friend, you will receive a $15 after their 3rd lesson.
        </div>
      </div>

      <div className="bg-[#FFFFFF] p-20 flex flex-col justify-center items-center">
        <div className="text-3xl md:text-6xl text-[#B18FCF] p-4 font-bold">
          Anyway, best of luck with your studies!
        </div>
        <div className="text-xl md:text-3xl text-[#B18FCF] p-4 font-bold">
          You're gonna pop off!
        </div>
      </div>

      <div className="bg-[#FFFFFF] p-20 flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center">
          <a
            href="https://www.instagram.com/mattlim268/"
            target="_blank"
            rel="noopener noreferrer"
            className="m-2 p-2"
          >
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
          <a
            href="https://www.facebook.com/matthew.lim.14418101/"
            target="_blank"
            rel="noopener noreferrer"
            className="m-2 p-2"
          >
            <FontAwesomeIcon icon={faFacebook} size="3x" />
          </a>
          <a
            href="https://www.linkedin.com/in/matthewlimmatthewlim/"
            target="_blank"
            rel="noopener noreferrer"
            className="m-2 p-2"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <a
            href="https://open.spotify.com/user/mattlsixhundred?si=b497dd67836148fe"
            target="_blank"
            rel="noopener noreferrer"
            className="m-2 p-2"
          >
            <FontAwesomeIcon icon={faSpotify} size="3x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
