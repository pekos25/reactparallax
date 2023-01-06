import React from "react";

import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImg from "./ParallaxImg";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import "./style.css";

const Home = () => {
  return (
    <ParallaxProvider>
      <ParallaxImg imgsrc={img1} height="700px" opacity="0.5">
        <h1 style={{ position: "absolute" }}>Code with PK</h1>
      </ParallaxImg>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        rhoncus condimentum purus sed porttitor. Nunc venenatis suscipit rutrum.
        Etiam vestibulum placerat lectus. Praesent interdum diam in sem gravida
        euismod. Aliquam finibus bibendum dui, eu interdum magna ornare non.
        Aenean sit amet dapibus felis. Praesent mauris urna, sollicitudin ac
        vestibulum eu, pretium sed elit. Praesent id est justo. Donec viverra
        est et dui consectetur rutrum. Nam interdum consectetur aliquam. Nullam
        vel viverra eros. Curabitur varius luctus velit ac egestas. Vestibulum
        commodo nunc ac lorem ultricies posuere. Praesent dignissim mauris non
        justo imperdiet tristique. Nullam ut ex vel velit elementum consectetur
        vel id mi. Donec vel iaculis lacus. Aliquam id urna at libero fermentum
        convallis. Phasellus nec venenatis diam, mattis mollis erat. Nunc
        molestie varius velit, ut commodo arcu. Sed consequat condimentum leo.
        Vestibulum lobortis ipsum sed justo rhoncus iaculis in a erat. Cras
        venenatis turpis id risus ullamcorper sagittis. Aenean non elementum
        sem, ut pulvinar ante. Phasellus sapien augue, dictum in tempus a,
        hendrerit imperdiet ex. Vivamus laoreet pulvinar nulla in blandit. Fusce
        mi neque, commodo at malesuada molestie, rhoncus in ante. Donec ut
        sodales orci. Pellentesque semper cursus posuere. Suspendisse at urna ut
        nisl accumsan porta efficitur sit amet libero. Curabitur id ipsum
        accumsan, tempus justo eget, tincidunt justo.
      </p>
      <ParallaxImg imgsrc={img2} height="700px" opacity="0.2">
        <button style={{ position: "absolute" }}>Code with PK</button>
      </ParallaxImg>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        rhoncus condimentum purus sed porttitor. Nunc venenatis suscipit rutrum.
        Etiam vestibulum placerat lectus. Praesent interdum diam in sem gravida
        euismod. Aliquam finibus bibendum dui, eu interdum magna ornare non.
        Aenean sit amet dapibus felis. Praesent mauris urna, sollicitudin ac
        vestibulum eu, pretium sed elit. Praesent id est justo. Donec viverra
        est et dui consectetur rutrum. Nam interdum consectetur aliquam. Nullam
        vel viverra eros. Curabitur varius luctus velit ac egestas. Vestibulum
        commodo nunc ac lorem ultricies posuere. Praesent dignissim mauris non
        justo imperdiet tristique. Nullam ut ex vel velit elementum consectetur
        vel id mi. Donec vel iaculis lacus. Aliquam id urna at libero fermentum
        convallis. Phasellus nec venenatis diam, mattis mollis erat. Nunc
        molestie varius velit, ut commodo arcu. Sed consequat condimentum leo.
        Vestibulum lobortis ipsum sed justo rhoncus iaculis in a erat. Cras
        venenatis turpis id risus ullamcorper sagittis. Aenean non elementum
        sem, ut pulvinar ante. Phasellus sapien augue, dictum in tempus a,
        hendrerit imperdiet ex. Vivamus laoreet pulvinar nulla in blandit. Fusce
        mi neque, commodo at malesuada molestie, rhoncus in ante. Donec ut
        sodales orci. Pellentesque semper cursus posuere. Suspendisse at urna ut
        nisl accumsan porta efficitur sit amet libero. Curabitur id ipsum
        accumsan, tempus justo eget, tincidunt justo.
      </p>
    </ParallaxProvider>
  );
};

export default Home;
