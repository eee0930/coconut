import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section { display: block; }
  body { line-height: 1; }
  ol, ul { list-style: none; }
  blockquote, q { quotes: none; }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * { box-sizing: border-box; }
  a {
    cursor: pointer !important;
    outline: none;
    color: inherit;
    text-decoration: none;
  }
  button { cursor: pointer; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: ${props => props.theme.background};
    color: $black;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }
  .hidden-section {
    padding: 0;
    width: 0;
    height: 0;
    margin: 0;
    display: none;
  }
  
`;

export const BasicStyle = createGlobalStyle`
  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, 
  .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, 
  .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, 
  .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, 
  .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, 
  .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, 
  .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, 
  .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, 
  .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, 
  .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
    position: relative;
    width: 100%;
    min-height: 1px;
  }
  .col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
  }
  .col-1 {
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-11 {
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .col-auto {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }
  @media (min-width: 575.5px) {
    .col-sm {
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-sm-1 {
      -ms-flex: 0 0 8.333333%;
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    .col-sm-2 {
      -ms-flex: 0 0 16.666667%;
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-sm-3 {
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-sm-4 {
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-sm-5 {
      -ms-flex: 0 0 41.666667%;
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    .col-sm-6 {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-sm-7 {
      -ms-flex: 0 0 58.333333%;
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    .col-sm-8 {
      -ms-flex: 0 0 66.666667%;
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    .col-sm-9 {
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-sm-10 {
      -ms-flex: 0 0 83.333333%;
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    .col-sm-11 {
      -ms-flex: 0 0 91.666667%;
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    .col-sm-12 {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
    .col-sm-auto {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
  }

  @media (min-width: 767.5px) {
    .col-md {
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-md-1 {
      -ms-flex: 0 0 8.333333%;
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    .col-md-2 {
      -ms-flex: 0 0 16.666667%;
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-md-3 {
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-md-4 {
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-md-5 {
      -ms-flex: 0 0 41.666667%;
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    .col-md-6 {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-md-7 {
      -ms-flex: 0 0 58.333333%;
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    .col-md-8 {
      -ms-flex: 0 0 66.666667%;
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    .col-md-9 {
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-md-10 {
      -ms-flex: 0 0 83.333333%;
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    .col-md-11 {
      -ms-flex: 0 0 91.666667%;
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    .col-md-12 {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
    .col-md-auto {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
  }
  @media (min-width: 991.5px) {
    .col-lg {
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-lg-1 {
      -ms-flex: 0 0 8.333333%;
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    .col-lg-2 {
      -ms-flex: 0 0 16.666667%;
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-lg-3 {
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-lg-4 {
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-lg-5 {
      -ms-flex: 0 0 41.666667%;
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    .col-lg-6 {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }  
    .col-lg-7 {
      -ms-flex: 0 0 58.333333%;
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    .col-lg-8 {
      -ms-flex: 0 0 66.666667%;
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    .col-lg-9 {
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-lg-10 {
      -ms-flex: 0 0 83.333333%;
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    .col-lg-11 {
      -ms-flex: 0 0 91.666667%;
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    .col-lg-12 {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
    .col-lg-auto {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
  }
  @media (min-width: 1199.5px) {
    .col-xl {
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-xl-1 {
      -ms-flex: 0 0 8.333333%;
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    .col-xl-2 {
      -ms-flex: 0 0 16.666667%;
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-xl-3 {
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-xl-4 {
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-xl-5 {
      -ms-flex: 0 0 41.666667%;
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    .col-xl-6 {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-xl-7 {
      -ms-flex: 0 0 58.333333%;
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    .col-xl-8 {
      -ms-flex: 0 0 66.666667%;
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    .col-xl-9 {
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-xl-10 {
      -ms-flex: 0 0 83.333333%;
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    .col-xl-11 {
      -ms-flex: 0 0 91.666667%;
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    .col-xl-12 {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
    .col-xl-auto {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
  }
  .align-self-start {
    -ms-flex-item-align: start !important;
    align-self: start !important;
  }
  .align-self-center {
    -ms-flex-item-align: center !important;
    align-self: center !important;
  }
  .align-self-end {
    -ms-flex-item-align: end !important;
    align-self: end !important;
  }      
  .text-center {text-align: center !important}
  .btn {
    display: inline-block;
    font-weight: 400;
    height: 35px;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    background-color: transparent;
    padding: 0;
    font-size: 1rem;
    border-radius: .25rem;
    transition: all .15s ease-in-out;
    cursor: pointer;
  }
  
  button:disabled {
    opacity: 0.5;
    -ms-filter: grayscale(0.4);
    filter: grayscale(0.4);
  }
  .mobile-hidden {display: none;}
  @media (min-width: 768px) {
    .mobile-hidden {display: inline-block;}
  }
`;

export const CocoStyles = createGlobalStyle`
.title {
  font-family: ${props => props.theme.title}, cursive;
  letter-spacing: -0.04em;
  word-spacing: 0.03em;
  font-stretch: 0.05em;
  line-height: 0.83;
}
.button {
  cursor: pointer;
  min-width: 50px;
  position: relative;
  display: block;
  border: none;
  background-color: transparent;
  padding: 1.125em 2.5em 0.9375em;

  font-family: ${props => props.theme.title}, cursive;
  letter-spacing: -0.04em;
  word-spacing: 0.03em;
  font-stretch: 0.05em;
  font-size: 1.2rem;
  color: ${props => props.theme.white.lighter};

  .button-back, .button-front {
    width: 100%;
    height: 100%;
    border: ${props => props.theme.boxLine.sm};
    display: block;
    padding: 0.4rem 0;
    border-radius: 8px;
    position: absolute;
  }
  .button-back {
    background-color: ${props => props.theme.black.veryDark};
    top: 3px;
    left: 3px;
    z-index: 0;
  }
  .button-front {
    background-color: ${props => props.theme.main1.main1};
    text-align: center;
    top: 0;
    left: 0;
    z-index: 2;
    transition: top 0.3s ease, left 0.3s ease;
  }
  &:hover .button-front,
  &:focus .button-front {
    top: 1px;
    left: 1px;
  }
}
@media (min-width: 768px) {
  .button {
    .button-back, .button-front {
      border: ${props => props.theme.boxLine.md};
    }
  }
}
@media (min-width: 1200px) {
  .button {
    .button-back, .button-front {
      border: ${props => props.theme.boxLine.lg};
    }
  }
}
.likeBtn.liked .fa-solid.fa-heart {
  color: ${props => props.theme.main1.main1};
}
.likeBtn.active i {
  color: ${props => props.theme.main1.main1};
  animation: bigToSmall 0.5s ease;
}
.play-list-icon .fa-music {
  font-size: 0.5em;
  background-color: ${props => props.theme.main1.main1};
  padding: 1px;
  position: relative;
  left: -8px;
  top: -1px;
}
input.coco-form {
  width: 100%;
  max-width: 250px;
  height: 40px;
  border: solid 2px ${props => props.theme.black.lighter};
  border-radius: 8px;
  padding: 2px 7px;
}
// /* radio, checkbox */
input.option-input, 
input.coco-form, 
textarea.coco-form,
select {
	-webkit-appearance: none; 
	-moz-appearance: none; 
	appearance: none;
}
select {
	//background-image: url('/images/common/icon/angle_down.svg') !important;
	background-size: 10px auto;
	background-repeat: no-repeat;
	background-position: calc(100% - 5px) center;
}
// /* checkbox & radio */
.option-input {
	-webkit-appearance: none;
	-moz-appearance: none;
	-ms-appearance: none;
	-o-appearance: none;
	appearance: none;
	position: relative;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	height: 17px;
	width: 17px;
	-webkit-transition: background 0.1s ease-out 0s;
	transition: background 0.1s ease-out 0s;
	background: #cdd2d7;
	border: none;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	margin-right: 0.1rem;
	outline: none;
	position: relative;
	z-index: 2;
}
.option-input:hover {background: #9faab7;}
.option-input:checked,
input.option-input[type="radio"]:checked,
input.option-input[type="checkbox"]:checked {
	background: ${props => props.theme.main1.main2};
	color: #fff !important;
}
.option-input:checked::before,
input.option-input[type="radio"]:checked::before,
input.option-input[type="checkbox"]:checked::before {
	height: 17px;
	width: 17px;
	position: absolute;
	content: '\2714';
	top: 0.5px;
	color: #fff !important;
	display: inline-block;
	font-size: 12px;
  font-style: normal !important;
	text-align: center;
	line-height: 17px;
	font-weight: 800;
}
.option-input:checked::after,
input.option-input[type="radio"]:checked::after,
input.option-input[type="checkbox"]:checked::after {
	-webkit-animation: click-wave 0.65s;
	-moz-animation: click-wave 0.65s;
	animation: click-wave 0.65s;
	background: ${props => props.theme.main1.main2};
	content: '';
	display: block;
	position: relative;
	z-index: 1;
}
.option-input.checkbox {border-radius: 2px;}
.option-input.checkbox::after {border-radius: 2px;}
.option-input.radio {border-radius: 50%;}
.option-input.radio::after {border-radius: 50%;}
@media (max-width: 767.5px) {
	.option-input {
		height: 20px;
		width: 20px;
		top: 5px;
	}
	.option-input:checked::before {
		height: 20px;
		width: 20px;
		top: 0.8px;
		font-size: 15px;
		line-height: 20px;
	}
	.option-input.radio {
		height: 22px;
		width: 22px;
		margin-bottom: -0.15rem;
	}
	.option-input:checked::before, 
	input.option-input[type="checkbox"]:checked::before {
		height: 20px;
		width: 20px;
		line-height: 20px;
	}
	
	.option-input.radio:checked::before, 
	input.option-input[type="radio"]:checked::before {
		height: 22px;
		width: 22px;
		line-height: 22px;
	}
  .option-input:checked,
	input.option-input[type="radio"]:checked,
	input.option-input[type="checkbox"]:checked {
		-webkit-animation: jelly .5s ease;
		animation: jelly .5s ease;
	}
}

// /* Glass Morphism */
.coco-glass {
	background: rgba(175, 148, 160, 0.25);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	-webkit-box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	border-radius: 10px;
	border: 1px solid rgba(175, 148, 160, 0.18);
}

// jelly effect
.jelly:hover, .jelly:active {
  -webkit-animation: jelly 0.3s ease;
  animation: jelly 0.3s ease;
}
@-webkit-keyframes jelly {
  0%, 100% {-webkit-transform: scale(1, 1)}
  30% {-webkit-transform: scale(1.25, 0.75)}
  40% {-webkit-transform: scale(0.75, 1.25)}
  50% {-webkit-transform: scale(1.15, 0.85)}
  65% {-webkit-transform: scale(.95, 1.05)}
  75% {-webkit-transform: scale(1.05, .95)}
}
@keyframes jelly {
  0%, 100% {transform: scale(1, 1)}
  30% {transform: scale(1.25, 0.75)}
  40% {transform: scale(0.75, 1.25)}
  50% {transform: scale(1.15, 0.85)}
  65% {transform: scale(.95, 1.05)}
  75% {transform: scale(1.05, .95)}
}
// /* box dots animation */
@-webkit-keyframes bURGXq {
  0% {-webkit-transform: translate(0px, 0px);}
  100% {-webkit-transform: translate(20px, 20px);}
}
@keyframes bURGXq {
  0% {transform: translate(0px, 0px);}
  100% {transform: translate(20px, 20px);}
}

// /* big-> small (하투 애니메이션) */
@-webkit-keyframes bigToSmall {
  0%, 100% {-webkit-transform: scale(1);}
  40% {-webkit-transform: scale(0.1);}
  70%, 75% {-webkit-transform: scale(3);}
  90% {-webkit-transform: scale(0.5);}
}
@keyframes bigToSmall {
  0%, 100% {transform: scale(1);}
  40% {transform: scale(0.1);}
  70%, 75% {transform: scale(3);}
  90% {transform: scale(0.5);}
}
`;

export const Loader = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  height: 100%;
  div {
    display: inline-block;
    position: relative;
    width: 40px;
    height: 40px;
    margin: 0 auto;
    div {
      position: absolute;
      border: 2px solid ${props => props.theme.main3.side};
      opacity: 1;
      border-radius: 50%;
      animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    div:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
  @keyframes lds-ripple {
    0% {
      top: 18px;
      left: 18px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 18px;
      left: 18px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 18px;
      left: 18px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 36px;
      height: 36px;
      opacity: 0;
    }
  }
`;
export const TitleSection = styled.div`
  margin: 3rem 1rem;
  h1 {
    font-size: 2rem;
    color: ${props => props.theme.main1.main2};
    text-transform: uppercase;
    i {
      width: 1.5em;
      font-size: 0.6em;
      position: relative;
      top: -5px;
      right: 0;
    }
  }
`;