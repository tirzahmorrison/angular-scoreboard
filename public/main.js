const quarters = ["1", "2", "3", "4", "OT"]

angular
  .module("Angular-Scoreboard", [])
  .controller("mainController", ($scope, $interval) => {
    $scope.currentQuarter = quarters[0]
    const nextQuarter = () => {
      const quarterIndex = quarters.indexOf($scope.currentQuarter)
      if (quarterIndex === quarters.length - 1) { return }
      $scope.currentQuarter = quarters[quarterIndex + 1]
    }

    $scope.nextQuarter = nextQuarter

    $scope.resetQuarter = () => {
      $scope.currentQuarter = quarters[0]
    }

    $scope.teamOneName = "Team 1"
    $scope.teamOneScore = 0
    $scope.updateTeamOneName = () => {
      $scope.teamOneName = $scope.teamOneNewName
    }

    $scope.teamOnePlusOne = () => {
      $scope.teamOneScore++
    }

    $scope.teamOneMinusOne = () => {
      $scope.teamOneScore--
    }

    $scope.teamTwoName = "Team 2"
    $scope.teamTwoScore = 0

    $scope.updateTeamTwoName = () => {
      $scope.teamTwoName = $scope.teamTwoNewName
    }

    $scope.teamTwoPlusOne = () => {
      $scope.teamTwoScore++
    }

    $scope.teamTwoMinusOne = () => {
      $scope.teamTwoScore--
    }

    $scope.minutes = "00"
    $scope.seconds = "00"

    const timerFunc = () => {


      let currentSecond = Number($scope.seconds) + 1
      let currentMinute
      if (currentSecond === 60) {
        currentMinute = Number($scope.minutes) + 1
        if (currentMinute < 10) {
          currentMinute = "0" + currentMinute
        }
        $scope.minutes = currentMinute
        currentSecond = 0
      }
      if (currentSecond < 10) {
        currentSecond = "0" + currentSecond
      }
      $scope.seconds = currentSecond
      if (currentMinute === "02") {
        $scope.seconds = "00"
        $scope.minutes = "00"
        nextQuarter()
      }

    }

    $interval(timerFunc, 1000)

  })

