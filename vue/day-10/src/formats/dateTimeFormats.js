const datetimeFormats = {
  en: {
    shortDate: {
      day: 'numeric',
      month: 'short'
    },
    longDate: {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    },
    fullDate: {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    },
    time: {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    }
  },
  fr: {
    shortDate: {
      day: 'numeric',
      month: 'short'
    },
    longDate: {
      day: 'numeric',
      month: 'long',
      year: '2-digit'
    },
    fullDate: {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    },
    time: {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    }
  },
  'en-IN': {
    shortDate: {
      day: 'numeric',
      month: 'short'
    },
    longDate: {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    },
    fullDate: {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    },
    time: {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    }
  }
}

export default datetimeFormats
