import './App.css'
import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component {
  state = {searchInput: '', userHistoryList: initialHistoryList}

  // Function to check if there's any history
  historyChecking = searchedUserHistoryList => {
    if (searchedUserHistoryList.length === 0) {
      return <p className="no-history">There is no history to show</p>
    }
    return null
  }

  // Function to update the search input state
  getInput = event => {
    this.setState({searchInput: event.target.value})
  }

  // Function to delete a history item by id
  deleteItem = id => {
    const {userHistoryList} = this.state
    const updatedHistoryList = userHistoryList.filter(
      each => each.id !== id,
    )
    this.setState({userHistoryList: updatedHistoryList})
  }

  render() {
    const {searchInput, userHistoryList} = this.state
    const searchedUserHistoryList = userHistoryList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <nav className="navbar">
          <div className="navbar-container">
            <div className="app-logo-container">
              <img
                className="app-logo"
                src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
                alt="app logo"
              />
            </div>
            <div className="search-bar-container">
              <div className="search-bar-logo-container">
                <img
                  className="search-bar-logo"
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                />
              </div>
              <input
                onChange={this.getInput}
                className="search-bar-input"
                type="search"
                placeholder="Search history"
                value={searchInput}
              />
            </div>
          </div>
        </nav>

        <div className="sub-container">
          {/* Display "There is no history to show" if no items are present */}
          {this.historyChecking(searchedUserHistoryList)}

          <ul className="searched-history-container">
            {searchedUserHistoryList.map(each => (
              <li className="searched-list" key={each.id}>
                <div className="searched-list-item">
                  <div className="application-timer">
                    <p className="timeAccessed">{each.timeAccessed}</p>
                    <div className="application-container">
                      <div className="application-logo-container">
                        <img
                          className="application-logo"
                          alt="domain logo"
                          src={each.logoUrl}
                        />
                      </div>
                      <div className="application-description">
                        <p className="application-title">{each.title}</p>
                        <p className="application-domain-name">
                          {each.domainUrl}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="delete-icon-container">
                    <button
                      className="delete-button"
                      data-testid="delete"
                      onClick={() => this.deleteItem(each.id)}
                    >
                      <img
                        className="delete-icon"
                        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                        alt="delete"
                      />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
