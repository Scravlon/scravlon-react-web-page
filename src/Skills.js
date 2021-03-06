import React from 'react';
import Typist from 'react-typist';

function Skill() {
  return (
    <div className="Skill">
      <header className="Skill-header">
      <h1>
      Skills
      </h1>
      <Typist avgTypingDelay={1} stdTypingDelay={18} cursor={{show: true, blink: true,element: '|',hideWhenDone: true,hideWhenDoneDelay: 2000}}>

        <p className="skillText">
          public class Skill &#123; <br/>
        <p className="skillSKip">
          String[] code = &#123;"<font color="red">Assembly language</font>", "<font color="red">C/C#/C++</font>", "<font color="red">CSS</font>", "<font color="red">HTML</font>", "<font color="red">Java</font>", "<font color="red">JavaScript</font>", "<font color="red">Kotlin</font>", "<font color="red">Python</font>", "<font color="red">ReactJs</font>", "<font color="red">Solidity</font>", "<font color="red">Ocaml</font>" &#125;;<br/>
        String[] mostProfficient = &#123;"<font color="red">C++</font>", "<font color="red">Java</font>", "<font color="red">JavaScript</font>", "<font color="red">ReactNative</font>"&#125;; <br/>
          String[] tools = &#123;"<font color="red">Android Studio</font>", "<font color="red">GitHub</font>", "<font color="red">Google Map API</font>", "<font color="red">Linux</font>", "<font color="red">Microsoft Office</font>", "<font color="red">Remix IDE</font>", "<font color="red">Truffle</font>", "<font color="red">Unity3D</font>" &#125;;<br/>
        String[] interest = &#123;"<font color="red">Artificial Intellegence</font>", "<font color="red">Blockchain</font>", "<font color="red">IoT</font>", "<font color="red">Mobile Application development</font>" &#125;;<br/>
          Map&#60;String, Integer&#62; languages = ImmutableMap.of("<font color="red">Chinese</font>", 5, "<font color="red">English</font>", 4, "<font color="red">Malay</font>", 4); <font color="grey">//Profficiency 1-5<br/><br/></font>

          public Skill&#123;<br/>
          &nbsp;   while(<font color="red">true</font>)&#123;<br/>
          &nbsp; &nbsp;    learnNewSkill();<br/>
          &nbsp;&nbsp;&#125;<br/>
           &nbsp;&#125;<br/>


          &#125;<br/>
        </p>
        </p>
        </Typist>

      </header>
    </div>
  );
}

export default Skill;
