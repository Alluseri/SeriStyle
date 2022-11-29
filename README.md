# SeriStyle
Bring back the Early-2021 UI back to YouTube!

## Style Clarification
I try adapting most styles and layouts directly from the old UI, but sometimes it is virtually impossible(e.g. because of script differences or I simply couldn't find what I was looking for), so there might be minor differences between what you remember and what I implemented.

## Roadmap
### TODO (NOT by priority)
- Homepage
  - Fix the background color of categories at the top(opt. remove them)
- Videopage
  - **Upper Layout Changes**
    - Fix RYD's awful sentiment bar
      - Cleanup(it doesn't, what a meme)
      - Fix position on the panel
      - Fix size
    - Realign Sponsor & Analytics
    - Hide context menu during mCC interaction cycle
    - [Specially restyle "Try It Free" button if applicable](https://www.reddit.com/r/youtube/comments/z12tk3/subscibersonly_chat_is_enabled_subscribe_button/)
    - Localize (E)RYDless/Hidden dislike button
    - Remove Premiere chat on published videos
      - Only when it's hidden
    - Fix notification bell color
      - [Bonus functionality] Autoswitch on click(hide context menu)
  - **Lower Layout Changes**
    - Disable scroll on collapse
    - Hide recommendation filters(All videos, New content, etc.)
    - Localization on Show More/Show Less
    - Old copyright flairs in description
    - Old comment section
    - Fix "Show More" button's hitbox being too wide
  - **Videoplayer Changes**
    - Remove heatmap
    - Remove precise drag if functionally possible
    - Better autoplay canceller(requires a switch-resistant pausable Date.now implementation)
    - Add MutationObserver impl. to current autoplay canceller(watch "hidden" attribute, style.display or element creation)
- Playlists
  - Old UI(will be split into steps later)
- General
  - Fixes [1](https://www.measurethat.net/Benchmarks/Show/22176/0/replace-classnamereplace-vs-classnamereplaceall-vs-clas), [2](https://www.measurethat.net/Benchmarks/Show/22177/0/contains-classname-vs-classlist)
  - Hide playlists in recommendations(or use API to restore them into videos)
  - Old top bar style
    - Old search bar
      - Old Search icon
    - Old notification bubble color
    - Old Menu icon
    - Old Mic Input icon
  - Disable notification count limit
  - Remove roundings
    - Thumbnails
    - Buttons(might be distributed between other sections later)
- Extension & its structure
  - Verify compatibility with latest Chrome and Firefox
  - Functional popup & settings page
  - Migrate necessary transformations to the general transformer
  - Letter spacing explicitly configurable
  - Fix early transformer burning causing issues
  - Fix old theme colors
  - More to come
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
  - **Videoplayer Changes**
    - Cancel autoplay when scrolled past video
- Playlists
  - Nothing yet!
- General
  - Fix theme colors
  - Old fonts(where applicable)
- Convert to Chrome extension
