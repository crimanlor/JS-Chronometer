# JS Chronometer

This project is a JavaScript-based chronometer designed to track time intervals accurately. It offers essential functionalities to start, stop, and record time.

## UML Calculator Diagram

Represents the structure and functionality of the `Chronometer` class.
![UML_Chronometer](images/chronometer-uml.png)

## Chronometer Class and its Methods

Chronometer class provides functionality for tracking time, allowing start, stop, and recording of elapsed time intervals. Below are the details of its methods and their operations:

#### Constructor

Receives arguments `intervalId` used for updating the time display, and `time` which represents the initial time value. When a new instance of Chronometer is created, this constructor initializes the chronometer with the provided `intervalId` and `time`.

#### start()

Checks if the chronometer is not already running before starting. Initiates a timer interval, updating the time display every second using the `startClock()` method.

#### stop()

Clears the interval timer if the chronometer is running.

#### startClock()

Retrieves the current time, formats the time as HH:MM:SS and updates the displayed time on the DOM element with the ID `chronometer-interfaz`.

#### record()

Checks if the chronometer is running before recording, creates a new list item containing the current time and appends the new record to the list of time records.

## Demo

[Click here to try out the chronometer live!](https://js-time-tracker.netlify.app/)
