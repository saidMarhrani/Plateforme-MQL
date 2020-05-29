function main() {
    this.service = new eventService();
    this.service.load();
    this.component = new eventComponent(this.service);
    this.component.buildForm();
    this.component.buildEvents();
}