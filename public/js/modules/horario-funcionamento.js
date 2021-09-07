export default class HorarioFuncionamento {
    constructor(funcionamento, activeClass) {
        this.funcionamento = document.querySelector(funcionamento);
        this.activeClass = activeClass;
    }

    dadosFuncionamento() {
        this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
        this.horarioSemana = this.funcionamento.dataset.horario.split(",").map(Number);
    }

    dadosAgora() {
        this.dataAgora = new Date();

        this.diaAgora = this.dataAgora.getDay();
        this.horarioAgora = this.dataAgora.getUTCHours() - 3;
    }

    verificaHorario() {
        this.semanaAberto = this.diasSemana.indexOf(this.diaAgora);
        this.horarioAberto = this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1];

        return this.semanaAberto && this.horarioAberto;
    }

    ativaAberto() {
        if (this.verificaHorario()) {
            this.funcionamento.classList.add(this.activeClass);
        }
    }

    init() {
        if (this.funcionamento) {
            this.dadosFuncionamento();
            this.dadosAgora();
            this.ativaAberto();
        }
        return this;
    }
}
