@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

:root {
  --red: hsl(0, 100%, 74%);
  --green: hsl(154, 59%, 51%);
  --blue: hsl(248, 32%, 49%);
  --dark-blue: hsl(249, 10%, 26%);
  --grayish-blue: hsl(246, 25%, 77%);
  --white: white;
  --body-font: "Poppins", sans-serif;
}

* {
  margin: 0;
  padding: 0;
}

body {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  box-sizing: border-box;
  font-family: var(--body-font);
  min-height: 100vh;
  background-image: url("images/bg-intro-desktop.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--red);
  background-position: center;
}

body::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

.main-container {
  margin: 0 auto;
  max-width: 1105px;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 7.5rem;
  grid-gap: 1.4rem;
}

/* Info Section */

.info-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: var(--white);
  align-items: center;
  justify-content: center;
  width: 100%;
}

.info-section h1 {
  font-size: 3rem;
  line-height: 3rem;
}

.info-section p {
  font-weight: 500;
}

/** Form Section */
.form-section {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  width: 100%;
}

.sales-btn {
  border-radius: 10px;
  border-width: 1px;
  border-color: transparent;
  border-style: solid;
  cursor: pointer;
  background-color: var(--blue);
  color: var(--white);
  font-weight: 700;
  font-size: 1rem;
  padding: 1.3rem 1rem;
  box-shadow: 0px 9px 5px -1px rgba(0, 0, 0, 0.27);
  -webkit-box-shadow: 0px 9px 5px -1px rgba(0, 0, 0, 0.27);
  -moz-box-shadow: 0px 9px 5px -1px rgba(0, 0, 0, 0.27);
}
.sales-btn span {
  font-weight: 400;
}
/* Form */
.main-form {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  background-color: var(--white);
  border-radius: 10px;
  padding: 2.5rem 2.7rem;
  box-shadow: 0px 9px 5px -1px rgba(0, 0, 0, 0.27);
  -webkit-box-shadow: 0px 9px 5px -1px rgba(0, 0, 0, 0.27);
  -moz-box-shadow: 0px 9px 5px -1px rgba(0, 0, 0, 0.27);
}

.main-form .input-field {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

input {
  padding: 1.2rem;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: var(--grayish-blue);
  opacity: 0.8;
  font-family: var(--body-font);
  padding-left: 1rem;
}

input::placeholder {
  font-weight: 700;
  font-size: 0.9rem;
  font-family: var(--body-font);
}
input:focus-visible {
  outline-width: 1px;
  outline-style: solid;
  outline-color: var(--blue);
}

/* Labels */

.name-label,
.lastname-label,
.email-label,
.pass-label {
  text-align: right;
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--red);
  font-style: italic;
}

.success-msg {
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--green);
  font-style: italic;
}

/* Error Icon */
.first-name-error,
.last-name-error,
.user-email-error,
.user-pass-error {
  display: none;
  right: 3%;
  top: 25%;
  position: absolute;
  align-items: right;
  background-image: url("images/icon-error.svg");
  background-repeat: no-repeat;
  height: 2.5rem;
  width: 2.5rem;
}

.submit-info {
  border-radius: 5px;
  border-width: 1px;
  border-color: transparent;
  border-style: solid;
  cursor: pointer;
  background-color: var(--green);
  color: var(--white);
  text-transform: uppercase;
  padding: 1.2rem;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all ease-in-out 0.3s;
}

.tnc {
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--grayish-blue);
  text-align: center;
}

.tnc a {
  text-decoration: none;
  color: var(--red);
  font-weight: 600;
}

@media (hover: hover) {
  .submit-info:hover {
    opacity: 0.7;
    transition: all ease-in-out 0.2s;
  }
}

@media screen and (max-width: 801px) {
  body {
    background-image: url("images/bg-intro-mobile.png");
  }
  .main-container {
    grid-template-columns: 1fr;
    margin-bottom: 5rem;
  }
  .info-section {
    text-align: center;
  }

  .info-section h1 {
    font-size: 2.5rem;
  }
}