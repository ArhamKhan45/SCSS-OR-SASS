import "./Styles/App.scss";
import React, { useEffect, useState } from "react";

function App() {
  const [titlename, settitle] = useState("Home Page");
  useEffect(() => {
    document.title = titlename;
  }, [titlename]);
  return (
    <>
      <div>
        <h2>Basic class and combinator</h2>
        <h1>Arham khan</h1>
        <p> my name is Arham khan</p>
      </div>
      <div className="productCard">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cum
          harum nesciunt ipsam ipsum odio a, quam aperiam sed officia quae
          recusandae, dolorem perferendis veritatis ea molestiae delectus
          obcaecati dolore! Arham, khan
        </p>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            consectetur dolorem distinctio aliquid nam quo, molestiae, eligendi
            repudiandae eos voluptatibus dolores natus minus libero enim facere.
            Culpa totam excepturi doloremque?
          </p>
        </div>
      </div>
      <div>
        <h1>Arham khan</h1>
        <p> my name is Arham khan</p>
      </div>

      <section className="bomb-button">
        <button>click me</button>
      </section>
      <div>
        <h1>Arham khan</h1>
        <p> my name is Arham khan</p>
      </div>
      <div className="productCard">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cum
          harum nesciunt ipsam ipsum odio a, quam aperiam sed officia quae
          recusandae, dolorem perferendis veritatis ea molestiae delectus
          obcaecati dolore! Arham, khan
        </p>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            consectetur dolorem distinctio aliquid nam quo, molestiae, eligendi
            repudiandae eos voluptatibus dolores natus minus libero enim facere.
            Culpa totam excepturi doloremque?
          </p>
        </div>
      </div>
      <div>
        <h1>Arham khan</h1>
        <p> my name is Arham khan</p>
      </div>

      <section className="bomb-button">
        <button>click me</button>
      </section>
      <div>
        <h1>Arham khan</h1>
        <p> my name is Arham khan</p>
      </div>
      <div className="productCard">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cum
          harum nesciunt ipsam ipsum odio a, quam aperiam sed officia quae
          recusandae, dolorem perferendis veritatis ea molestiae delectus
          obcaecati dolore! Arham, khan
        </p>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            consectetur dolorem distinctio aliquid nam quo, molestiae, eligendi
            repudiandae eos voluptatibus dolores natus minus libero enim facere.
            Culpa totam excepturi doloremque?
          </p>
        </div>
      </div>
      <div>
        <h1>Arham khan</h1>
        <p> my name is Arham khan</p>
      </div>

      <section className="bomb-button">
        <button>click me</button>
      </section>
      <div>
        <h1>Arham khan</h1>
        <p> my name is Arham khan</p>
      </div>
      <div className="productCard">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cum
          harum nesciunt ipsam ipsum odio a, quam aperiam sed officia quae
          recusandae, dolorem perferendis veritatis ea molestiae delectus
          obcaecati dolore! Arham, khan
        </p>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            consectetur dolorem distinctio aliquid nam quo, molestiae, eligendi
            repudiandae eos voluptatibus dolores natus minus libero enim facere.
            Culpa totam excepturi doloremque?
          </p>
        </div>
      </div>
      <div>
        <h1>Arham khan</h1>
        <p> my name is Arham khan</p>
      </div>

      <section className="bomb-button">
        <button>click me</button>
      </section>
      <div>
        <h1>Arham khan</h1>
        <p> my name is Arham khan</p>
      </div>
      <div className="productCard">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cum
          harum nesciunt ipsam ipsum odio a, quam aperiam sed officia quae
          recusandae, dolorem perferendis veritatis ea molestiae delectus
          obcaecati dolore! Arham, khan
        </p>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            consectetur dolorem distinctio aliquid nam quo, molestiae, eligendi
            repudiandae eos voluptatibus dolores natus minus libero enim facere.
            Culpa totam excepturi doloremque?
          </p>
        </div>
      </div>
      <div>
        <h1>Arham khan</h1>
        <p> my name is Arham khan</p>
      </div>

      <section className="bomb-button">
        <button>click me</button>
      </section>
      <div>
        <h1>Arham khan</h1>
        <p> my name is Arham khan</p>
      </div>

      <h2>
        @import "_Colors1.scss " and @use "_Colors1.scss as mycolor-name" use
        @use instead of using @import for partials for multiple colors
      </h2>
      <div className="productCard">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cum
          harum nesciunt ipsam ipsum odio a, quam aperiam sed officia quae
          recusandae, dolorem perferendis veritatis ea molestiae delectus
          obcaecati dolore! Arham, khan
        </p>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            consectetur dolorem distinctio aliquid nam quo, molestiae, eligendi
            repudiandae eos voluptatibus dolores natus minus libero enim facere.
            Culpa totam excepturi doloremque?
          </p>
        </div>
      </div>
      <div>
        <h1>Arham khan</h1>
        <p> my name is Arham khan</p>
      </div>
      <h2> @extend and inheritance works properly here</h2>
      <section className="bomb-button">
        <button>click me</button>
        <p> click me 2</p>
        <p> click me 2</p>
      </section>

      <h2>
        % use for making templates and for effecting coding. This CSS will print
        because %custom-template is extended otherwise it will not compile.
      </h2>
      <section className="custom1">
        <label className="p1"> click me 1</label>
        <label className="p2"> click me 2</label>

        <label className="p3"> click me 3</label>
      </section>

      <h2>@Mixin function and @include</h2>
      <section className="custom2">
        <label className="p4"> click me 1</label>
        <label className="p5"> click me 2</label>

        <label className="p6"> click me 3</label>
      </section>
    </>
  );
}

export default App;
