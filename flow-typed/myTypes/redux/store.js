// @flow
import type { Store as ReduxStore } from 'redux';

declare type State = {
  +phone: string,
  +address: string,
  +email: string,
  +venueName: string,
  +image: string,
  +socialMedia: {
    +facebook: string,
    +instagram: string,
    +twitter: string,
  },
  +description: string,
  +products: Array<{
    +image: string,
  }>,
  +workingHours: Array<{
    +day: string,
    +open: boolean,
    +opensAt: string,
    +closesAt: string,
  }>,
  +services: Array<{
    +name: string,
    +products: Array<{
      +productName: string,
    }>
  }>,
}

export type Store = ReduxStore<State>;
