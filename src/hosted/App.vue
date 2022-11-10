<template>
  <main>
    <vue-command
      :autocompletion-resolver="autocompletionResolver"
      :built-in="builtIn"
      :commands="commands"
      :cursor.sync="cursor"
      :history.sync="history"
      :help-timeout="1250"
      :prompt="prompt"
      :stdin.sync="stdin"
      show-help
    ></vue-command>
  </main>
</template>

<script>
import ChuckNorris from "./ChuckNorris";
import Party from "./Party";
import NanoEditor from "./NanoEditor";
import VueCommand from "../components/VueCommand";
import { createStdout, createStderr, createDummyStdout } from "../library";

const PROMPT = "sajad@quantum:~$";
const PROMPTDIR = (DIR) => {
  return `sajad@quantum:~${DIR}$`;
};
const DIR = [
  {
    Dir: "resume",
    ls: `
          <table class="ls txt">
            <tr>
              <td>android.txt</td>
              <td>python.txt</td>
              <td>nodejs.txt</td>
            </tr>
          </table>
  `,
  },
  {
    Dir: "education",
    ls: `
          <table class="ls txt">
            <tr>
              <td>mathDiploma.txt</td>
              <td>engineer.txt</td>
            </tr>
          </table>
  `,
  },
  {
    Dir: "courses",
    ls: `
          <table class="ls txt">
            <tr>
              <td>android.txt</td>
              <td>web.txt</td>
            </tr>
          </table>
  `,
  },
  {
    Dir: "hobbies",
    ls: `
          <table class="ls txt">
            <tr>
              <td>git.txt</td>
            </tr>
          </table>
  `,
  },
];

const TXT = [
  {
    ntxt: "skills.txt",
    txt: `linux<br>web developer<br>nodejs<br>react<br>
      javascript<br>express js<br>vue js<br>mongoDB<br>
      <br>postgresql<br><br>python programmer<br>
      c++ programmer<br>git<br>
      seo<br>html/css<br>teamwork`,
    Dir: PROMPT,
  },
  {
    ntxt: "contactMe.txt",
    txt: `<strong>mail: </strong>sajadadineh@protonmail.com<br>
          <strong>github: </strong><a href="https://github.com/sajadadineh" target="_blank">github.com/sajadadineh</a><br>
          <strong>linkedin: </strong><a href="https://www.linkedin.com/in/sajad-adineh-2b0153188/" target="_blank">linkedin.com/sajadadineh</a><br>
    `,
    Dir: PROMPT,
  },
  {
    ntxt: "android.txt",
    txt: `<h2>Android developer , university tehran</h2>
      <h5>2017-2018</h5>
      <h3><a href="https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%A7%D9%86%D8%AF%D8%B1%D9%88%DB%8C%D8%AF-mk337/ target="_blank">link</a></h3>

  `,
    Dir: PROMPTDIR("/courses"),
  },
  {
    ntxt: "web.txt",
    txt: `<h2>Web developer, weblite school</h2>
      <h5>Apr 2020-Jul 2020</h5>
      <h3><a href="https://www.aparat.com/v/pESVC" target="_blank">link</a></h3>

  `,
    Dir: PROMPTDIR("/courses"),
  },
  {
    ntxt: "mathDiploma.txt",
    txt: `<h2>Math diploma , Beheshti high school</h2>
      <h5>2015-2018</h5>
      <h3>tehran</h3>
  `,
    Dir: PROMPTDIR("/education"),
  },
  {
    ntxt: "engineer.txt",
    txt: `<h2>Computer software engineering , Islamic azad university</h2>
      <h5>2019-present</h5>
      <h3>tehran</h3>
  `,
    Dir: PROMPTDIR("/education"),
  },
  {
    ntxt: "nodejs.txt",
    txt: `<h2>Web developer internship at weblite</h2>
      <h5>Apr 2020-Jul 2020</h5>
      <h3>front and backend developer</h3>
    <br><hr><br>
    <h2>Nodejs developer and system architecture at tiva soft</h2>
      <h5>Jul 2020-present</h5>
      <h3>systerm architecture and backend developer in shahr farsh</h3>`,
    Dir: PROMPTDIR("/resume"),
  },
  {
    ntxt: "python.txt",
    txt: `<h2>Python programmer at government organization</h2>
      <h5>2019-2020</h5>
      <h3>Developed a web crawler and scrapy for internet</h3>`,
    Dir: PROMPTDIR("/resume"),
  },
  {
    ntxt: "android.txt",
    txt: `<h2>Android developer & ui / ux designer at winep</h2>
      <h5>2017-2019</h5>
      <h3>collaboration in the android programming team of smart home program</h3>`,
    Dir: PROMPTDIR("/resume"),
  },
  {
    ntxt: "git.txt",
    txt: `<h3>solve programming problems and learn new technologies and solve math problems 
          in <a href="https://projecteuler.net/archives" target="_blank" >euler site</a>
          and push them in github or gitlab</h3>`,
    Dir: PROMPTDIR("/hobbies"),
  },
];

export default {
  components: {
    VueCommand,
  },

  data: () => ({
    autocompletionResolver: () => undefined,
    builtIn: undefined,
    commands: {
      // list Directory
      ls: undefined,

      // exit the terminal
      exit: undefined,

      // Navigate to home, self and back
      cd: undefined,

      // Clear terminals history
      clear: undefined,

      // show one text file
      cat: undefined,

      // Returns the parsed object to test parsing
      // E. g.: echo --x="one two three" --y="one two" --z="one" --test="okay" --x1 --y2 --t=ok -dash
      // echo: (_) => createStdout(JSON.stringify(_, null, 2)),

      // Show help
      help: () =>
        createStdout(`
        &nbsp;<strong>hello-world</strong> [test command]<br>
        &nbsp;<strong>cd</strong> [change the shell working directory]<br>
        &nbsp;<strong>cat</strong> [concatenate files and print on the standard output]<br>
        &nbsp;<strong>clear</strong> [clear terminal]<br>
        &nbsp;<strong>ls</strong> [list directory contents]<br>
        &nbsp;<strong>exit</strong> [cause normal process termination]<br>
        &nbsp;<strong>norris</strong> [tell me a joke]<br>
        &nbsp;<strong>nano</strong> [nano's ANOther editor, inspired by Pico]<br>
      `),

      // Return simple text
      "hello-world": () => createStdout("Hello world"),

      // Show a animation
      "sajad.js": () => Party,

      // Nano editor available in many shells
      nano: () => NanoEditor,

      // Return a Chuck Norris joke
      norris: () => ChuckNorris,

      // Show current path
      pwd: () => undefined,
    },

    // Terminal cursor position
    cursor: 0,
    lsHistory: [],
    history: [],
    options: {
      long: {
        cd: ["test"],
      },

      short: {},
    },

    prompt: PROMPT,
    stdin: "",
  }),

  created() {
    this.commands.exit = () => {
      window.open("http://google.com", "_self");
    };

    this.commands.clear = () => {
      this.history = [];
      // Push dummy Stdout to show Stdin
      return createDummyStdout();
    };

    this.commands.ls = (_) => {
      if (this.prompt === PROMPT) {
        return createStdout(`
          <table class="ls dir">
            <tr>
              <td>${DIR[0].Dir}</td>
              <td>${DIR[1].Dir}</td>
              <td>${DIR[2].Dir}</td>            
            </tr>
            <tr>
              <td>${DIR[3].Dir}</td>
              <td class="txt">${TXT[0].ntxt}</td>
              <td class="txt">${TXT[1].ntxt}</td>
              <td class="program">sajad.js</td>
            </tr>
          </table>
  `);
      }

      for (let i = 0; DIR.length > i; i++) {
        if (this.prompt === PROMPTDIR(`/${DIR[i].Dir}`)) {
          return createStdout(`${DIR[i].ls}`);
        }
      }
      return createDummyStdout();
    };

    this.commands.cat = ({ _ }) => {
      for (let i = 0; TXT.length > i; i++) {
        if (_[1] === TXT[i].ntxt && this.prompt === TXT[i].Dir) {
          return createStdout(`${TXT[i].txt}`);
        }
      }
      return createStderr(`cat: ${_[1]}.txt: Is a directory`);
    };

    this.commands.cd = ({ _ }) => {
      for (let i = 0; DIR.length > i; i++) {
        if (
          (_[1] === DIR[i].Dir || _[1] === `${DIR[i].Dir}/`) &&
          this.prompt === PROMPT
        ) {
          this.prompt = PROMPTDIR(`/${DIR[i].Dir}`);

          return createDummyStdout();
        }

        if (
          (_[1] === "../" || _[1] === ".." || typeof _[1] === "undefined") &&
          this.prompt === PROMPTDIR(`/${DIR[i].Dir}`)
        ) {
          this.prompt = PROMPT;

          return createDummyStdout();
        }

        if (_[1] === "." || _[1] === "./") {
          return createDummyStdout();
        }
      }
      return createStderr(`cd: ${_[1]}: No such file or directory`);
    };

    this.commands.pwd = () => {
      // Take current prompt into account
      if (this.prompt === "sajad@quantum:~") {
        return createStdout("/");
      } else {
        return createStdout("/home");
      }
    };

    this.builtIn = (stdin, terminal) => {
      // Check for application
      if (stdin.trim().split(" ")[0] !== "reverse") {
        terminal.commandNotFound(stdin);

        return;
      }

      stdin = stdin.trim();
      // Get second argument
      const argument = stdin.split(" ").slice(1).join(" ").replace(/"/g, "");

      // Do nothing if no argument given
      if (!argument) {
        return;
      }

      // Reverse argument
      this.stdin = argument.split("").reverse().join("");
    };

    this.autocompletionResolver = () => {
      // Preserve cursor position
      // **
      const cursor = this.cursor;

      // Reverse concatenate autocompletable according to cursor
      let pointer = this.cursor;
      let autocompleteableStdin = "";
      while (this.stdin[pointer - 1] !== " " && pointer - 1 > 0) {
        pointer--;
        autocompleteableStdin = `${this.stdin[pointer]}${autocompleteableStdin}`;
      }

      // Divide by arguments
      const command = this.stdin.split(" ");

      // Autocompleteable is program
      if (command.length === 1) {
        const autocompleteableProgram = command[0];
        // Collect all autocompletion candidates
        const candidates = [];
        const programs = [...Object.keys(this.commands), "reverse"].sort();
        programs.forEach((program) => {
          if (program.startsWith(autocompleteableProgram)) {
            candidates.push(program);
          }
        });

        // Autocompletion resolved into multiple results
        if (this.stdin !== "" && candidates.length > 1) {
          this.history.push({
            // Build table programmatically
            render: (createElement) => {
              const columns = candidates.length < 5 ? candidates.length : 4;
              const rows =
                candidates.length < 5
                  ? 1
                  : Math.ceil(candidates.length / columns);

              let index = 0;
              const table = [];
              for (let i = 0; i < rows; i++) {
                const row = [];
                for (let j = 0; j < columns; j++) {
                  row.push(createElement("td", candidates[index]));
                  index++;
                }

                table.push(createElement("tr", [row]));
              }

              return createElement("table", { style: { width: "30%" } }, [
                table,
              ]);
            },
          });
        }

        // Autocompletion resolved into one result
        if (candidates.length === 1) {
          // Mutating Stdin mutates the cursor, so we've to wait to push it to the end
          const unwatch = this.$watch(
            () => this.cursor,
            () => {
              this.cursor =
                cursor +
                (candidates[0].length - autocompleteableStdin.length + 0);

              unwatch();
            }
          );

          this.stdin = candidates[0];
        }

        return;
      }

      // Check if option might be completed already or option is last tokens
      if (
        this.stdin[cursor] !== "" &&
        this.stdin[cursor] !== " " &&
        typeof this.stdin[cursor] !== "undefined"
      ) {
        return;
      }

      // Get the executable

      const program = command[0];

      // Check if any autocompleteable exists
      if (
        typeof this.options.long[program] === "undefined" &&
        typeof this.options.short[program] === "undefined"
      ) {
        return;
      }

      // Autocompleteable is long option
      if (autocompleteableStdin.substring(0, 2) === "--") {
        const candidates = [];
        this.options.long[program].forEach((option) => {
          // If only dashes are presents, user requests all options
          if (
            `--${option}`.startsWith(autocompleteableStdin) ||
            autocompleteableStdin === "--"
          ) {
            candidates.push(option);
          }
        });

        // Autocompletion resolved into one result
        if (candidates.length === 1) {
          const autocompleted = `${this.stdin.substring(0, pointer - 1)} --${
            candidates[0]
          }`;
          const rest = `${this.stdin.substring(this.cursor)}`;

          // Mutating Stdin mutates the cursor, so we've to wait to push it to the end
          const unwatch = this.$watch(
            () => this.cursor,
            () => {
              this.cursor =
                cursor +
                (candidates[0].length - autocompleteableStdin.length + 2);

              unwatch();
            }
          );

          this.stdin = `${autocompleted}${rest}`;

          return;
        }

        // Autocompletion resolved into multiple result
        if (autocompleteableStdin === "--" || candidates.length > 1) {
          this.history.push({
            // Build table programmatically
            render: (createElement) => {
              const columns = candidates.length < 5 ? candidates.length : 4;
              const rows =
                candidates.length < 5
                  ? 1
                  : Math.ceil(candidates.length / columns);

              let index = 0;
              const table = [];
              for (let i = 0; i < rows; i++) {
                const row = [];
                for (let j = 0; j < columns; j++) {
                  row.push(createElement("td", `--${candidates[index]}`));
                  index++;
                }

                table.push(createElement("tr", [row]));
              }

              return createElement("table", { style: { width: "100%" } }, [
                table,
              ]);
            },
          });
        }

        return;
      }

      // Autocompleteable is option
      if (autocompleteableStdin.substring(0, 1) === "-") {
        const candidates = [];
        this.options.short[program].forEach((option) => {
          // If only one dash is present, user requests all options
          if (
            `-${option}`.startsWith(autocompleteableStdin) ||
            autocompleteableStdin === "-"
          ) {
            candidates.push(option);
          }
        });

        // Autocompletion resolved into one result
        if (candidates.length === 1) {
          const autocompleted = `${this.stdin.substring(0, pointer - 1)} -${
            candidates[0]
          }`;
          const rest = `${this.stdin.substring(this.cursor)}`;

          // Mutating Stdin mutates the cursor, so we've to wait to push it to the end
          const unwatch = this.$watch(
            () => this.cursor,
            () => {
              this.cursor =
                cursor +
                (candidates[0].length - autocompleteableStdin.length + 1);

              unwatch();
            }
          );

          this.stdin = `${autocompleted}${rest}`;

          return;
        }

        // Autocompletion resolved into multiple result
        if (autocompleteableStdin === "-" || candidates.length > 1) {
          this.history.push({
            // Build table programmatically
            render: (createElement) => {
              const columns = candidates.length < 5 ? candidates.length : 4;
              const rows =
                candidates.length < 5
                  ? 1
                  : Math.ceil(candidates.length / columns);

              let index = 0;
              const table = [];
              for (let i = 0; i < rows; i++) {
                const row = [];
                for (let j = 0; j < columns; j++) {
                  row.push(createElement("td", `-${candidates[index]}`));
                  index++;
                }

                table.push(createElement("tr", [row]));
              }

              return createElement("table", { style: { width: "100%" } }, [
                table,
              ]);
            },
          });
        }
      }
    };
  },
};
</script>

<style lang="scss">
.ls {
  width: 40%;
}
.txt {
  color: #65888c;
}
.program {
  color: #4e9a06;
}
.dir {
  color: #3465a4;
}
* {
  margin: 0;
  padding: 0;
}
body {
  background: #002b36;

  h1,
  h2,
  h3 {
    font-family: "Inconsolata", monospace;
  }

  p {
    color: #65888c;
    font-size: 20px;
    font-family: "Montserrat", sans-serif;
  }

  pre {
    width: 100%;
    padding: 0;
    margin-top: 1em;
    overflow: auto;
    overflow-y: hidden;

    code {
      padding: 10px;
      color: #333;
      margin: 5px;
    }
  }

  .vue-command {
    .term-bar {
      position: fixed;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .term-std {
      margin-top: 52px;
      height: 100%;
    }
  }
}
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #252525;
}

::-webkit-scrollbar-thumb {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb:hover {
  background: #333;
}
</style>
