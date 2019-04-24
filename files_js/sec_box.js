listOfBoxes = [
    {
      name: "Programming in Python",
      level: "Beginer",
      content: "Quod consectetur euis obcaecati sapiente! Eum distinctio veniam eligendi tenetur magnam porro, laborum optio quis amet quam illo optio eum.",
      dots_1: " circle test",
      dots_2: " circle_2 test",
      dots_3: " circle_2 test",
    },
    {
      name: "Android mobile Development",
      level: "Intermediate",
      content: "Expedita qui eaque facere soluta, rerum tempore hic animi amet culpa sit voluptate unde sed quas quos ofiicja est nostrum ducimus unde maiores fugit.",
      dots_1: " circle test",
      dots_2: " circle test",
      dots_3: " circle_2 test",
    },
    {
      name: "React.js Workshop",
      level: "Advanced",
      content: "Nostrum magni, iure nemo soluta sed perferendis repallat aligendi eveniet assumanda possimus moliita amet id doloribus saepe est",
      dots_1: " circle test",
      dots_2: " circle test",
      dots_3: " circle test",
    },
    {
      name: "Backend in Node.js",
      level: "Advanced",
      content: "Voluptatibus deserunt quas ullam iste. Autem hihil explicabo doloremque nam possimus quae, veritatis obcecati reprehenderit mollitia dolores, his, similique",
      dots_1: " circle test",
      dots_2: " circle test",
      dots_3: " circle test",
    },
    {
      name: "User Experience Design",
      level: "Beginer",
      content: "Parro aut quos, ducimus placeat odio recusandae quas perspiciatis corrupti quibusdam.Aut voluptate dolores, enim velit doloremaue accusntim culpa",
      dots_1: " circle test",
      dots_2: " circle_2 test",
      dots_3: " circle_2 test",
    },
    {
      name: "iOS mobile Development",
      level: "Intermediate",
      content: "Quo odit ad,sed eveniet ut expedita, rem laborum!Excepturi tempore totam, at,eum,eos debits molestias reprehenderit officis commodi,et facere.",
      dots_1: " circle test",
      dots_2: " circle test",
      dots_3: " circle_2 test",
      
    },
    ];
    document.addEventListener("DOMContentLoaded", function() {
    let boxesContainer = document.getElementById("boxes-container");
      listOfBoxes.forEach(element => {
      let boxDiv = document.createElement("div");
      let contentDiv = document.createElement("div");
      let contentStyle1Div = document.createElement("div");
      let contentStyle2Div = document.createElement("div");
      let h5 = document.createElement("h5");
      let span_1 = document.createElement("span");
      let span_2 = document.createElement("span");
      let span_3 = document.createElement("span");
      let h6 = document.createElement("h6");
      let p = document.createElement("p");
      let button = document.createElement("button");
      boxDiv.className = "box";
      contentDiv.className = "content";
      contentStyle1Div.className = "content-style";
      contentStyle2Div.className = "content-style-2";
      button.className = "btn-box";
      h5.innerText = element.name;
      h6.innerText = element.level;
      p.innerText = element.content;
      button.innerText = "View Course";
      span_1.className = element.dots_1;
      span_2.className = element.dots_2;
      span_3.className = element.dots_3;
      boxDiv.appendChild(contentDiv);
      boxDiv.appendChild(button);
      contentStyle1Div.appendChild(h5);
      contentStyle2Div.appendChild(p);
      contentDiv.appendChild(contentStyle1Div);
      contentDiv.appendChild(span_1);
      contentDiv.appendChild(span_2);
      contentDiv.appendChild(span_3);
      contentDiv.appendChild(h6);
      contentDiv.appendChild(contentStyle2Div);
      boxesContainer.appendChild(boxDiv);
    });
    });
  