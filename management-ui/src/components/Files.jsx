import React, { Component } from 'react';
import { OpenInNew } from 'material-ui-icons';

class Files extends Component {

  render() {
    const uploadDirectory = process.env.REACT_APP_BACK_END_URL + 'uploads';

    return (
      <main>
        <h1>
          Files
        </h1>
        <p>
          <a href={uploadDirectory} target="_blank" rel="external">
            <abbr title="Opens in a new tab/window">
              <OpenInNew fontSize />
            </abbr>
            Browser files in Back-end.
          </a>
        </p>
        <section>
          <h2>
            Upload
          </h2>
          <form
            action={uploadDirectory}
            method="POST"
            enctype="multipart/form-data"
          >
            <p>
              <input type="file" name="file" />
            </p>
            <p>
              <button type="submit">
                Submit
              </button>
            </p>
          </form>
        </section>
      </main>
    );
  }
}

export default Files;
