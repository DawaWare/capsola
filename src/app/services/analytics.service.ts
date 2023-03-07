import { Injectable } from '@angular/core';
import {
  FirebaseAnalytics,
  FirebaseAnalyticsPlugin,
} from '@capacitor-community/firebase-analytics';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  constructor() {
    FirebaseAnalytics.setCollectionEnabled({ enabled: true });
  }

  setUserId(userId: string) {
    FirebaseAnalytics.setUserId({ userId: userId });
  }

  setUserProperty(name: string, value: string) {
    FirebaseAnalytics.setUserProperty({ name: name, value: value });
  }

  setSecreenName(screenName: string) {
    FirebaseAnalytics.setScreenName({ screenName: screenName });
  }

  logEvent(name: string, parameters: object) {
    FirebaseAnalytics.logEvent({ name: name, params: parameters });
  }
}
