"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var T =
/*#__PURE__*/
function () {
  function T() {
    _classCallCheck(this, T);

    this.page_title = "BDKJ-O-MAT";
    this.qa_modal_title = "Fragen &amp; Antworten";
	this.qa_modal_body = '<h4>Wie funktioniert der BDKJ-O-MAT?</h4>\
					<p>Der BDKJ-O-MAT ist eine Web-App, mit der du dich zu den Wahlämtern auf der BDKJ DV 2026_1 informieren kannst. Du kannst rausfinden, welches Wahlamt zu dir passt. Beantworte die Fragen und finde es heraus.</p>\
\
					<h4>Wo bekomme ich mehr Infos?</h4>\
					<p>Der BDKJ-O-MAT ist ein Angebot des Wahlausschusses zur DV 2026_1. Den Wahlausschuss erreichst du unter <a href="wahlausschuss@bdkj-speyer.de">wahlausschuss@bdkj-speyer.de</a>. <br> <br> Der Wahlausschuss kann dir Auskunft rund um die offenen Ämter und das Wahlverfahren geben. Die aktuell ausgeschriebenen (Ehren-)Ämter findest du\
						<a href="https://bdkj-speyer.de/dvunterlagen">hier</a>.</p>\
\
					<h4>Wer hat den BDKJ-O-MAT programmiert?</h4>\
					<p>Der BDKJ-O-MAT basiert auf dem Mahlowat, mehr Infos dazu findest du\
						<a href="https://github.com/hszemi/mahlowat">hier</a>. Der Mahlowat ist freie Software. <br> Ein Dank gilt außerdem Luca Naudszus für die Tipps rund um die Umsetzung.</p>';
    this.btn_qa_modal_close = "Schließen";
    this.swype_info_message_text = "Wische, um manuell zwischen Thesen zu wechseln";
    this.btn_swype_info_ok = "OK";
    this.start_subtitle = "Welches Wahlamt passt zu dir?";
    this.start_explanatory_text = "<p>Die Wahlen auf der BDKJ-DV stehen bevor, aber du weißt noch gar nicht welches Amt das Richtige für dich wäre? Beantworte ein paar Fragen und finde es heraus!</p>";
    this.btn_start = "Start";
    this.btn_start_show_qa = "Fragen &amp; Antworten";
    this.btn_toggle_thesis_more_text = "Erläuterung";
    this.btn_important = "These doppelt gewichten";
    this.btn_yes_text = "Zustimmung";
    this.btn_neutral_text = "Neutral";
    this.btn_no_text = "Ablehnung";
    this.btn_skip_text = "Überspringen";
    this.btn_mahlowat_show_start = "Zurück zur Startseite";
    this.btn_mahlowat_show_qa = "Fragen &amp; Antworten";
    this.btn_mahlowat_skip_remaining_theses = "Alle verbleibenden Thesen überspringen und aktuellen Stand auswerten";
    this.title_results = "Ergebnis";
    this.title_results_summary = "Zusammenfassung";
    this.text_result_below_summary = '<small>Nicht zufrieden mit dem Ergebnis?\
				<button class="btn btn-sm btn-light" onclick="showMahlowatFirstThesis()">Ändere die Antworten oder die Gewichtung!</button>\
			</small>';
    this.title_results_details = "";
    this.btn_results_show_start = "Zurück zur Startseite";
    this.btn_results_show_qa = "Fragen &amp; Antworten";
  }

  _createClass(T, [{
    key: "thesis_number",
    value: function thesis_number(number) {
      return "These " + number;
    }
  }, {
    key: "achieved_points_text",
    value: function achieved_points_text(pointsForList, maxAchievablePoints) {
      return '' + pointsForList + '/' + maxAchievablePoints + ' Punkte';
    }
  }, {
    key: "btn_make_thesis_double_weight",
    get: function get() {
      return "These doppelt gewichten";
    }
  }, {
    key: "btn_thesis_has_double_weight",
    get: function get() {
      return "These wird doppelt gewichtet";
    }
  }, {
    key: "label_your_choice",
    get: function get() {
      return "Deine Wahl";
    }
  }, {
    key: "default_text_no_statement",
    get: function get() {
      return "<small class='text-muted'>Keine Stellungnahme.</small>";
    }
  }, {
    key: "error_loading_config_file",
    get: function get() {
      return '<b>Fehler</b> Die Konfigurationsdatei <a href="config/data.json"><tt>config/data.json</tt></a> konnte nicht geladen\
		werden. Existiert sie und enthält keine Syntaxfehler?';
    }
  }]);

  return T;
}();

