export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Spitze', 'Klasse', 'Gut gemacht!']
export const GAME_COPIED_MESSAGE = 'Spiel in Zwischenablage kopiert'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Nicht genug Buchstaben'
export const WORD_NOT_FOUND_MESSAGE = 'Wort nicht gefunden'
export const HARD_MODE_ALERT_MESSAGE =
  'Den schwierigen Modus kann man nur zu Beginn einschalten!'
export const HARD_MODE_DESCRIPTION =
  'JedeTipp muss in den nächsten Versuchen angewendet werden!'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'For improved color vision'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The word was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Eingabe'
export const DELETE_TEXT = 'Löschen'
export const STATISTICS_TITLE = 'Statistik'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'Neues Wort in'
export const SHARE_TEXT = 'teile'
export const SHARE_FAILURE_TEXT =
  'Unable to share the results. This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.'
export const MIGRATE_BUTTON_TEXT = 'Übertrage'
export const MIGRATE_DESCRIPTION_TEXT =
  'Click here to transfer your statistics to a new device.'
export const TOTAL_TRIES_TEXT = 'Total tries'
export const SUCCESS_RATE_TEXT = 'Success rate'
export const CURRENT_STREAK_TEXT = 'Current streak'
export const BEST_STREAK_TEXT = 'Best streak'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "You are using an embedded browser and may experience problems sharing or saving your results. We encourage you rather to use your device's default browser."

export const DATEPICKER_TITLE = 'Choose a past date'
export const DATEPICKER_CHOOSE_TEXT = 'Choose'
export const DATEPICKER_TODAY_TEXT = 'today'
export const ARCHIVE_GAMEDATE_TEXT = 'Game date'
