function main() {
    this.service = new trainingService();
    this.service.load();
    console.log(this.service.trainings);
    this.component = new trainingComponent(this.service);
    this.component.buildForm();
    this.component.buildAll();
}