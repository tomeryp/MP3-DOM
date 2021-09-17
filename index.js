/**
 * Plays a song from the player.
 * Playing a song means changing the visual indication of the currently playing song.
 *
 * @param {String} songId - the ID of the song to play
 */
function playSong(songId) {
    const playingEl = document.querySelector(".playing");
    if (playingEl) {
        playingEl.classList.remove("playing");
    }

    const songEl = document.querySelector(`[data-songId=${songId}]`);
    songEl.classList.add("playing");
}

/**
 * Creates a song DOM element based on a song object.
 */
function createSongElement({ id, title, album, artist, duration, coverArt }) {
    const children = [artEl, "Title: ", titleEl, " Album: ", albumEl, " Artist: ", aritstEl]
    const classes = ["song"]
    const attrs = { onclick: `playSong(${id})`, "data-songId": id};
    return createElement("div", children, classes, attrs);
}

/**
 * Creates a playlist DOM element based on a playlist object.
 */
function createPlaylistElement({ id, name, songs }) {
    const children = [name]
    const classes = ["playlist"]
    const attrs = {"data-playlistId": id}
    return createElement("div", children, classes, attrs)
}

/**
 * Creates a new DOM element.
 *
 * Example usage:
 * createElement("div", ["just text", createElement(...)], ["nana", "banana"], {id: "bla"})
 *
 * @param {String} tagName - the type of the element
 * @param {Array} children - the child elements for the new element.
 *                           Each child can be a DOM element, or a string (if you just want a text element).
 * @param {Array} classes - the class list of the new element
 * @param {Object} attributes - the attributes for the new element
 */
 function createElement(tagName, children = [], classes = [], attributes = {}) {
    const el = document.createElement(tagName);
      
    // Children
    for(const child of children) {
      el.append(child);
    }
  
    // Classes
    for(const cls of classes) {
      el.classList.add(cls);
    }
  
    // Attributes
    for (const attr in attributes) {
      el.setAttribute(attr, attributes[attr]);
    }
  
    return el;
  }
// You can write more code below this line
