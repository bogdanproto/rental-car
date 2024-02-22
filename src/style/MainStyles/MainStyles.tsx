import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const MainStyles = createGlobalStyle`


html {
  margin: 0;
 
}

 body {
  margin: 0;
  font-family: 'Manrope', sans-serif;

}

code {
  font-family: 'Manrope', sans-serif;

}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

input:focus  {
    outline: none;
}

`;
