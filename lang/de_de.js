"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var T =
/*#__PURE__*/
function () {
  function T() {
    _classCallCheck(this, T);

    this.page_title = "bdkj wal-o-mat";
    this.qa_modal_title = "Logbuch";
	this.qa_modal_body = '<h4>Wie funktioniert der bdkj wal-o-mat?</h4>\
					<p>Der bdkj wal-o-mat ist eine Web-App, mit der du dich zu den Wahlämtern auf der BDKJ-Diözesanversammlung informieren kannst. Du kannst ausprobieren, welches Wahlamt am ehesten mit deinen Wünschen und Zielen übereinstimmt. Der bdkj wal-o-mat ist keine Kandidaturempfehlung, sondern ein Informationsangebot rund um die Wahlen auf der DV.</p>\
\
					<h4>Wo bekomme ich mehr Infos zu den Wahlämtern?</h4>\
					<p>Den Wahlausschuss erreichst du unter <a href="mailto:wahlausschuss@bdkj-speyer.de">wahlausschuss@bdkj-speyer.de</a>. <br> <br> Der Wahlausschuss kann dir - während der DV auch in Präsenz - Auskunft rund um die offenen Ämter, die jeweiligen Wahlvoraussetzungen und das Wahlverfahren geben. Außerdem kannst du diejenigen Menschen, die bereits in einem Amt sind, nach ihren Erfahrungen fragen. Die zur jeweiligen DV ausgeschriebenen (Ehren-)Ämter findest du in der aktuellsten Ausschreibung des Wahlausschusses in den DV-Unterlagen.</p>\
\
					<h4>Hilfe, was bedeuten diese ganzen Begriffe?</h4>\
					<p>Hier eine kleine Übersetzung:<br><i>Wal = Wahl<br>Abtauchen = Tool starten <br>Logbuch = Infos rund um das Tool<br>Klar Schiff! = Okay!<br>Perfekte Welle aktivieren = These doppelt gewichten<br>ausfischen = zurück auf die Startseite<br>zurück zum Hafen = zurück zur Startseite<br>direkt auftauchen = verbleibende Thesen überspringen und Ergebnis auswerten<br>Kurs korrigieren = Neu starten</i></p>\
\
					<h4>Wer hat den bdkj wal-o-mat programmiert?</h4>\
					<p>Der bdkj wal-o-mat ist ein Angebot des Wahlausschusses. <br> Der bdkj wal-o-mat basiert technisch auf dem Mahlowat, mehr Infos dazu findest du\
						<a href="https://github.com/hszemi/mahlowat">hier</a>. Der Mahlowat ist freie Software. <br> <br> Ein Dank gilt außerdem Luca Naudszus für die Inspiration und einige gute Tipps rund um die Umsetzung. <br><br> <i><b>Kontakt:</b><br>Wahlausschuss des BDKJ Speyer<br>Webergasse 11<br>67346 Speyer<br><a href="mailto:wahlausschuss@bdkj-speyer.de">wahlausschuss@bdkj-speyer.de</a></i><br><br><a href="https://bdkj-speyer.de/impressum/">Impressum</a></p>';
    this.btn_qa_modal_close = "Schließen";
    this.swype_info_message_text = "Wische, um manuell zwischen Thesen zu surfen. Gehe ins Logbuch, falls dir etwas unklar ist.";
    this.btn_swype_info_ok = "Klar Schiff!";
    this.start_subtitle = "Tauch' ein in unsere Wa(h)lämter!";
    this.start_explanatory_text = "<p>Du hast Lust, was zu bewegen, aber bist planlos beim Start? Oder bist du schon Profi im Ehrenamt und dein Terminkalender steht kurz vor der Flut? Wir angeln dir das Ehrenamt aus dem Ozean, das perfekt zu deinen Zielen und deinem Zeitbudget passt.</p>";
    this.btn_start = "Abtauchen!";
    this.btn_start_show_qa = "Logbuch";
    this.btn_toggle_thesis_more_text = "Erläuterung";
    this.btn_important = "Das ist die perfekte Welle!";
    this.btn_yes_text = "yeah!";
    this.btn_neutral_text = "hmm...";
    this.btn_no_text = "och nö!";
    this.btn_skip_text = "These skippen";
    this.btn_mahlowat_show_start = "ausfischen";
    this.btn_mahlowat_show_qa = "Logbuch";
    this.btn_mahlowat_skip_remaining_theses = "direkt auftauchen";
    this.title_results = "Dein Ergebnis ist aufgetaucht...";
    this.title_results_summary = "Stell' dich zur Wal!";
    this.text_result_below_summary = '<small>Die Strömung hat dich in die falsche Richtung getrieben? Justiere deinen Kompass und fische ein passenderes Ehrenamt!\
				<button class="btn btn-sm btn-light" onclick="showMahlowatFirstThesis()">Kurs korrigieren</button>\
			</small>';
    this.title_results_details = "";
    this.btn_results_show_start = "Zurück zum Hafen";
    this.btn_results_show_qa = "Logbuch";
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
      return "Perfekte Welle aktivieren";
    }
  }, {
    key: "btn_thesis_has_double_weight",
    get: function get() {
      return "Das ist die perfekte Welle!";
    }
  }, {
    key: "label_your_choice",
    get: function get() {
      return "Deine Wahl";
    }
  }, {
    key: "default_text_no_statement",
    get: function get() {
      return "<small class='text-muted'> </small>";
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

