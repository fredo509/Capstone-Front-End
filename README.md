<a name="readme-top"></a>

# Vacay Inn

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
  - [Key Features](#key-features)
  - [🚀 Presentation](#presentation)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
 - [Usage](#usage)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# Vacay Inn Front-End <a name="about-project"></a>


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://www.ruby-lang.org">Ruby</a></li>
    <li><a href="https://rubyonrails.org/">Ruby on Rails</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

<!-- Features -->

## Kanban Board

### Current state

[Kanban Board](https://github.com/users/hernandanielzamora/projects/4/views/1)

### Initial State

![image](https://camo.githubusercontent.com/06ae0b8a6d178a32902c22e9de37ebe10b28d5298f1f3dde4ffa022d785dffde/68747470733a2f2f692e706f7374696d672e63632f6662506a4351594c2f6769746875622d636f6d2d75736572732d6865726e616e64616e69656c7a616d6f72612d70726f6a656374732d342d76696577732d312e706e67)

<br>

### Final Team: 

4 members (all mentioned in the authors section)

### Key Features <a name="key-features"></a>

- Dynamic Navigation Routes: "Vacay Inn" employs a versatile navigation panel that gracefully manages both public routes (rooms, login, and signup) and exclusive private routes, ensuring secure access to tailored content for authenticated users.

- Effortless User Registration: "Vacay Inn" streamlines the user registration process, making it a breeze for individuals to create an account. Users can effortlessly provide their essential information, which is securely stored within the system. This component seamlessly oversees the user registration journey.

- Robust User Authentication: The application features a robust authentication system powered by Devise and fortified with JWT tokens. This fortification ensures users can securely log in, granting them access to a world of exclusive features and personalized content.

- Gateway Home Page: The heart of "Vacay Inn" lies in its inviting home page, serving as the primary entry point for users. It showcases available rooms and their intricacies, offering users a glimpse of the possibilities upon login.

- Comprehensive Branch Insights: The details component enriches the user experience by providing in-depth information about each hotel branch. This encompasses vivid descriptions, an array of amenities, and transparent pricing details. Users can effortlessly make reservations directly from this informative page.

- Effortless Reservation Management: Users wield the power of reservation management with ease through the reservation component. It seamlessly presents a comprehensive list of all reservations while affording users the flexibility to delete reservations as per their requirements.

- Seamless Room Reservations: "Vacay Inn" grants users the freedom to reserve rooms with utmost convenience from their chosen hotel branch. The reservation form component, readily accessible from both the navigation panel and the details page, streamlines this reservation process.

- Empowering Room Management: Administrators are bestowed with the authority to create and add new hotel branches to the application through the user-friendly "add room" form component. This empowers them to furnish details such as branch names and captivating descriptions.

- Control Over Content: Administrators possess the capability to manage the content they contribute to the platform, including the ability to delete hotel branches they have added. This feature ensures a dynamic level of control and flexibility.

- Redux-Driven State Management: "Vacay Inn" harnesses the power of Redux for seamless state management. This strategic utilization facilitates an organized and efficient handling of API interactions, ensuring data consistency throughout the application.

- Intuitive User Interface: The application is purposefully designed with a user-first approach. Its intuitive interface paves the way for effortless navigation and interaction with the platform's array of features.

- Adaptive and Responsive Design: "Vacay Inn" prides itself on its adaptive and responsive design, seamlessly adjusting to diverse screen sizes and devices. This unwavering commitment to responsiveness guarantees a harmonious and delightful user experience across a spectrum of devices, including smartphones, tablets, and desktops.

In summary, "Vacay Inn" is a feature-rich application meticulously crafted to simplify the hotel reservation experience. From the user-friendly registration process and robust authentication to reservation management and responsive design, the app strives to deliver a user-centric and seamless journey for reserving rooms at captivating hotel branches.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Backend Repository Link
<a href="https://github.com/hernandanielzamora/Capstone-Back-End">Backend Repo</a>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

If you would like to get a local copy up and running, please follow these steps.

### Prerequisites

In order to run this project you need to have ruby and ruby on rails installed in your computer. You can check that by running `ruby -v` in your console <br>

If you do not have ruby installed in your computer, you can follow [this](https://gorails.com/setup/windows/10) tutorial (for Windows) <br>

For installing ruby on MacOS you can run the following commands: <br>

```bash
brew install rbenv ruby-build
# Add rbenv to bash so that it loads every time you open a terminal
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile

# Install Ruby
rbenv install 3.0.1
rbenv global 3.0.1
ruby -v
```

For installing RoR you need to run 

```bash
gem install rails
```

To run the backend you need to clone the backend repo (link on backend repository link section) and run the following commands:

```bash
cd Capstone-Back-End
bundle install
rails db:create
rails db:migrate
rails db:seed
rails s
```

### Deployment

[Visit the deployed site](https://vacay-inn.onrender.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Setup

Clone this repository to your desired folder:
```
cd my folder
  git clone https://github.com/hernandanielzamora/Capstone-Front-End.git
```
Open your terminal and navigate to the cloned project directory.

### Install

- Install this project with:

```sh
  cd Capstone-Front-End

  npm install or npm i
```

### Usage

To run the project, execute the following command:

```sh
  npm start

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Hernán Zamora**

- LinkedIn: [Hernán Zamora](https://www.linkedin.com/in/zamora-hernan/)
- Github: [@hernandanielzamora ](https://github.com/hernandanielzamora)

👤 **Christian Zambrano**

- GitHub: [@zamcham](https://github.com/zamcham)
- Twitter: [@ZamChamGames](https://twitter.com/zamchamgames)
- LinkedIn: [Cristian Zambrano](https://www.linkedin.com/in/cristian-zamcham/)

👤 **Fredo St Fleur**

- LinkedIn: [Fredo st Fleur](https://www.linkedin.com/in/fredo-st-fleur-0b41a122a/)
- GitHub: [@fredo509](https://github.com/fredo509)

👤 **Jose Luis Vazquez Flores**

- GitHub: [@jlvFlores](https://github.com/jlvFlores)
- Twitter: [@JoseVaz44312762](https://twitter.com/JoseVaz44312762)
- LinkedIn: [Jose (Luis) Vazquez](https://www.linkedin.com/in/jose-luis-vazquez/)

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

-**Add a admin dashboard** .
-**Display additional Room information** .
-**Improve styling and organice sass files** .

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Please feel free to try out our App and test the user interface. We will love to hear from you and how can we improve our app. Please feel free to contact us if you have any questions, comments or concerns. You can also fork this repo and submit a PR for any changes/improvements you would like to see.

Feel free to check the [issues page](https://github.com/hernandanielzamora/Capstone-Front-End/issues).


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project give us a star ⭐️

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

Special thanks to our team who made possible the completion of this project.
Thanks to [Murat Korkmaz](https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign) for providing the original design.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>