function main() {
    var service = new LaureatService();
    service.load();
    var component = new  LaureatComponent(service);
   component.buildFirstContainer();
   component.buildSecondContainer();
   //component.filterBySociety();
}