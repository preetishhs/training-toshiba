const dateTimeFormats = {
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
    time: {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    }
  }
}

export default dateTimeFormats
