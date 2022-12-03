# SeriStyle
Bring the Early-2021 UI back to YouTube!

## Style Clarification
I try adapting most styles and layouts directly from the old UI, but sometimes it is virtually impossible(e.g. because of script differences or I simply couldn't find what I was looking for), so there might be minor differences between what you remember and what I implemented.

## Roadmap
### TODO (NOT by priority)
- Homepage
  - Fix the background color of categories at the top(opt. remove them)
- Videopage
  - **Upper Layout Changes**
    - Fix RYD's awful sentiment bar
      - Changing the residing panel and a few styles should be enough
    - Realign Sponsor & Analytics
    - Hide context menu during mCC interaction cycle
    - [Specially restyle "Try It Free" button if applicable](https://www.reddit.com/r/youtube/comments/z12tk3/subscibersonly_chat_is_enabled_subscribe_button/)
    - Localize RYDless/Hidden dislike button
    - Remove Premiere chat on published videos
      - Only when it's hidden
    - Fix notification bell color
      - [Bonus functionality] Autoswitch on click(hide context menu)
	- Fix Save tooltip being too high
  - **Lower Layout Changes**
    - Hide recommendation filters(All videos, New content, etc.)
    - Old copyright flairs in description
    - Old comment section(will be split into steps later)
  - **Videoplayer Changes**
    - Remove heatmap
    - Remove precise drag if functionally possible
    - Better autoplay canceller(requires a switch-resistant pausable Date.now implementation)
    - Add MutationObserver impl. to current autoplay canceller(watch "hidden" attribute, style.display or element creation)
- Playlists
  - Old UI(will be split into steps later)
- General
  - Hide playlists in recommendations(or use API to restore them into videos)
  - Old top bar style
    - Old notification bubble color
    - Old Menu icon
  - Disable notification count limit
  - Remove roundings
    - Thumbnails
    - Buttons(might be distributed between other sections later)
- Extension & its structure (Will not be merged into Done)
  - Add icons to settings page
### Done
- Homepage
  - Nothing yet!
- Videopage
  - **Upper Layout Changes**
    - Hide RYD sentiment bar
    - Sacrifice Create Clip to fit Add to Playlist on smaller screens
    - Old Share icon
    - Old Like/Dislike icons
    - Old subscribe button style & location(+ uppercase option)
    - Old Add to Playlist icon
    - Old view count & publish date
    - Remove action bar buttons' backgrounds
    - Fix icon colors to match like/dislike
    - Old Menu icon
    - Fix margins
    - Old pfp style
  - **Lower Layout Changes**
    - Remove background
    - Old expander style
    - Correct description positioning
    - Fix margins
    - Remove "Explicit Lyrics" flair
    - Fix "Show More" button's hitbox being the whole description
  - **Videoplayer Changes**
    - Cancel autoplay when scrolled past video
- Playlists
  - Nothing yet!
- General
  - Fix theme colors
  - Old fonts(where applicable)
  - Old top bar style
    - Old search bar