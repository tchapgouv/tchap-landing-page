import {Component} from "react";

class Tac extends Component {

	render() {
		return (
			<div className="tc_Tac">
        <h1>Conditions générales d'utilisation</h1>

        <div className="tc_Tac_paragraph">
          <h2>Ceci est un gros titre, pour une grande partie</h2>
          <div className="tc_Tac_subparagraph">
            <h3>Ceci est un petit titre, pour une sous partie</h3>
            <div>Ceci est un bout de texte.</div>
            <div>Pour chaque retour à la ligne, faire un div séparé.</div>
          </div>
          <div className="tc_Tac_subparagraph">
            <h3>Une autre sous partie</h3>
            <div>Avec du texte</div>
          </div>
        </div>

        <div className="tc_Tac_paragraph">
          <h2>Une autre grande partie</h2>
          <div>Le texte direct, sans sous-partie</div>
          <div>
            Si ya besoin d'une liste :
            <ul>
              <li>Premier point</li>
              <li>Deuxième point</li>
            </ul>
            Ca fait une liste.
          </div>
          <div>
            Si ya besoin d'une liste avec des numéros :
            <ol>
              <li>Premier point</li>
              <li>Deuxième point</li>
            </ol>
            Ca fait une liste avec des numéros.
          </div>
        </div>
			</div>
		);
	}
}

export default Tac;
