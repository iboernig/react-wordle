export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Spitze', 'Klasse', 'Gut gemacht!']
export const GAME_COPIED_MESSAGE = 'Spiel in Zwischenablage kopiert'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Nicht genug Buchstaben'
export const WORD_NOT_FOUND_MESSAGE = 'Wort nicht gefunden'
export const HARD_MODE_ALERT_MESSAGE =
  'Den schwierigen Modus kann man nur zu Beginn einschalten!'
export const HARD_MODE_DESCRIPTION =
  'Jeder Tipp muss in den nächsten Versuchen angewendet werden!'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Für bessere Farbdarstellung'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Das Wort war ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Du musst ${guess} in der ${position} haben.`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `${letter} muss enthalten sein!`
export const ENTER_TEXT = 'Eingabe'
export const DELETE_TEXT = 'Löschen'
export const STATISTICS_TITLE = 'Statistik'
export const GUESS_DISTRIBUTION_TEXT = 'Verteilung der Versuche'
export const NEW_WORD_TEXT = 'Neues Wort in'
export const SHARE_TEXT = 'Teile'
export const SHARE_FAILURE_TEXT =
  'Kann die Ergebnisse leider nicht teilen.'
export const MIGRATE_BUTTON_TEXT = 'Übertrage'
export const MIGRATE_DESCRIPTION_TEXT =
  'Hiermit kannst du die Statistiken auf einderes Gerät übertragen.'
export const TOTAL_TRIES_TEXT = 'Gesamtzahl der Versuche'
export const SUCCESS_RATE_TEXT = 'Erfolgsrate'
export const CURRENT_STREAK_TEXT = 'Aktuelles Ergebnis'
export const BEST_STREAK_TEXT = 'Bestes Ergebnis'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "Versuche bitte einen anderen Browser."

export const DATEPICKER_TITLE = 'Suche ein vergangenes Datum'
export const DATEPICKER_CHOOSE_TEXT = 'Wähle'
export const DATEPICKER_TODAY_TEXT = 'Heute'
export const ARCHIVE_GAMEDATE_TEXT = 'Spieldatum'
