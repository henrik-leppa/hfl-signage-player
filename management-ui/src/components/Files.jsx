import React, { Component } from 'react';
import { Button, withStyles } from 'material-ui';
import { OpenInNew } from 'material-ui-icons';

const styles = theme => ({
  mainContent: {
    textAlign: 'center',
  },
});

class Files extends Component {

  render() {
    const { classes } = this.props;
    const uploadDirectory = process.env.REACT_APP_BACK_END_URL + 'uploads';

    return (
      <main className={classes.mainContent}>
        <h1>
          Files
        </h1>
        <p>
          <a href={uploadDirectory} target="_blank" rel="external">
            <abbr title="Opens in a new tab/window">
              <OpenInNew fontSize />
            </abbr>
            Browser files in Back-end (check after send).
          </a>
        </p>
        <section>
          <h2>
            Upload
          </h2>
          <form
            action={uploadDirectory}
            method="POST"
            encType="multipart/form-data"
          >
            <p>
              <input type="file" name="file" />
            </p>
            <p>
              <Button
                variant="raised"
                color="primary"
              >
                Send
              </Button>
            </p>
          </form>
        </section>
      </main>
    );
  }
}

const FilesStyled = withStyles(styles)(Files);

export default FilesStyled;
