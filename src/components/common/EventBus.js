import Vue from 'vue';

export const EventBus = new Vue();

EventBus.SCROLL_EVENT = "scrollEvent";
EventBus.LOAD_COMPLETE_EVENT = "loadCompleteEvent";
