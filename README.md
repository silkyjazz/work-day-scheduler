# work-day-scheduler

## Description

This is a simple work day scheduler used to save appointments, to-do's, or future projects to work on. The user can choose to save an item in a time block based on typical business hours (9am-5pm) and have the item saved to local storage. Depending on the time of day, the user will be able to see the current hour with a background of red. All hours that have past will have a grey background and all hours that have yet to pass will have a background of green. 

## Table of Contents 

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

View the [Live Site](https://silkyjazz.github.io/work-day-scheduler/) on Github!

## Usage

When the application is rendered to the browser, the user will see time blocks for hours nine to five.
![On Page Load](assets/on_load.png)

The user will be able to save events in the necessary time block
![Current Event](assets/new_event.png)

The user will also have the option to change any events that were previously stored
![Change the current event](assets/change_event.png)

The save button is getting the value from the text area and setting the data to local storage on button click.
![Save the Event](assets/save_button.png)

When the user refreshes the page, they are able to see the events that are saved in local storage on page load.
![Saved Event In Local Storage](assets/saved_event.png)

## Credits

1. [Dayjs](https://day.js.org/)
2. [jQuerey Docs](https://jqueryui.com/)

## License

MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![BootStrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)

