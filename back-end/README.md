HFL Signage Player: Back-end
============================

[Express.js] back-end for [HFL Signage Player]

<table>
  <tr>
    <th scope="col">Command-line</th>
    <th scope="col">Front page</th>
    <th scope="col">Browsing uploads</th>
  </tr>
  <tr>
    <td>
      <a href="./screenshots/terminal.png">
        <img
          alt="Screenshot"
          style="max-width: 100%"
          src="./screenshots/terminal.png"
        >
      </a>
    </td>
    <td>
      <a href="./screenshots/home.png">
        <img
          alt="Screenshot"
          style="max-width: 100%"
          src="./screenshots/home.png"
        >
      </a>
    </td>
    <td>
      <a href="./screenshots/uploads.png">
        <img
          alt="Screenshot"
          style="max-width: 100%"
          src="./screenshots/uploads.png"
        >
      </a>
    </td>
  </tr>
</table>

Hosts a [PouchDB] database and an upload directory.


[MIT License]
-------------


Getting Started / Installation
------------------------------

1. Open a command-line in the root of this subproject's directory.
2. Run `npm install`.
3. Run `npm start`.
   - The command-line will show which port the server is using in localhost.
   - To change the port, change the `PORT` variable in the `.env` file that
     `npm start` creates, and restart this subproject.

     **Note:** Remember to then update `REACT_APP_BACK_END_URL` in the `.env`
     files of Front-end and Management UI!


[Express.js]: https://github.com/expressjs/express
[PouchDB]: https://github.com/pouchdb/pouchdb
[HFL Signage Player]: https://github.com/henrik-leppa/hfl-signage-player
[MIT License]: ./LICENSE.md
