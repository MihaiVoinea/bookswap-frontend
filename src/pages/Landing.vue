<template>
  <div class="container">
    <header>
      <img src="../assets/img/logo.png" alt="BookSwap" />
      <nav>
        <ul>
          <li>
            <a href="#">Explorează</a>
          </li>
          <li>
            <a href="#">Despre</a>
          </li>
          <li>
            <a href="#" class="btn-cont">Cont</a>
          </li>
          <li>
            <a href="#" class="btn btn-cta">Începe</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <section>
        <div>
          <h1>Obține ușor cărțile pe care ți le dorești</h1>
          <p>
            BookSwap este o platforma online unde poți schimba cărțile de care
            nu mai ai nevoie pentru unele noi.
          </p>
          <a href="#" class="btn btn-cta">Caută o carte</a>
        </div>
        <img
          src="../assets/img/book_lover.svg"
          alt="Person reading book Image"
        />
      </section>
      <section>
        <div id="left">
          <img src="../assets/img/map.svg" alt="Map Image" />
          <h2>Distanțe minime</h2>
          <p>
            Căutăm persoane ce doresc să facă schimb în apropierea ta astfel
            încât distanțele să fie minime. Nu trebuie să-ți faci griji pentru
            transportul cărților.
          </p>

          <a href="#">
            Află mai multe
            <img src="./../assets/img/arrow_right_red.svg" />
          </a>
        </div>
        <div id="right">
          <img src="../assets/img/checked.svg" alt="Checked Image" />
          <h2>Condiții excelente</h2>
          <p>
            Ne asigurăm că toate cărțile adăugate pe platforma noastră sunt în
            condiții bune pentru a-ți oferi o experiență pe măsura așteptărilor
            tale.
          </p>

          <a href="#">
            Află mai multe
            <img src="../assets/img/arrow_right_red.svg" />
          </a>
        </div>
      </section>
      <section>
        <div>
          <h2>O colecție imensă de cărti</h2>
          <p>
            Dispunem de o colecție imensă de cărți, deci poți fi sigur că o să
            găsești ceva pe gustul tău. Toate cărțile sunt adăugate de alți
            utilizatori.
          </p>
          <a href="#" class="btn btn-cta">Caută o carte</a>
        </div>

        <img src="../assets/img/bookcovers.png" />
      </section>
    </main>
  </div>
</template>

<style lang="scss">
h1 {
  font-weight: 300;
  font-size: 6.4rem;
  line-height: normal;
  margin-top: 0px;
}

h2 {
  font-weight: 300;
  font-size: 3.6rem;
}

p {
  color: rgba(0, 0, 0, 0.8);
  text-align: justify;
  line-height: 130%;
}

body {
  overflow-x: hidden;
}

section:nth-child(3) {
  display: flex;

  align-items: center;
  margin-top: 700px;
  div {
    margin-left: 140px;
    flex: 0 0 38%;
  }

  img {
    flex: 0 0 62%;
    position: relative;
    left: 9.5%;
  }
}

section:nth-child(2) {
  display: flex;
  align-items: center;
  margin-top: 400px;
  justify-content: space-evenly;
  * {
    margin-left: 40px;
    margin-right: 40px;
  }

  #left {
    img {
      display: block;
      margin: 60px auto 85px auto;
    }
  }

  #right {
    img {
      display: block;
      margin: 35px auto 58px auto;
    }
  }

  #left,
  #right {
    margin-right: 2%;

    h2 {
      margin-top: 0px;
      margin-bottom: 0px;
    }

    p {
      margin-bottom: 40px;
      margin-top: 8px;
    }

    a {
      text-decoration: none;
      color: $red-main;
      img {
        display: inline-block;
        width: 1em;
        height: 1em;
        margin: 0;
        position: relative;
        top: 3px;
        left: 3px;
      }
    }
  }

  #right {
    margin-left: 2%;
  }

  div#left,
  div#right {
    width: 44%;
    height: 650px;
    border-radius: 15px;
    box-shadow: 0px 3px 20px rgba(54, 64, 82, 0.18);
  }
}

section:first-child {
  display: flex;
  align-items: center;
  img {
    float: right;
    position: relative;
    //left: 100px;
    flex: 0 0 48%;
  }
  margin-top: 120px;
  p {
    margin-bottom: 50px;
    width: 80%;
  }
  .btn-cta {
    padding: 18px 35px 18px 35px;
  }
  div {
    flex: 0 0 52%;
  }
}

body {
  font-size: 1.8rem;
}

.btn {
  padding: 10px 35px 10px 35px;
  border-radius: 100px;
}

.btn-cta {
  background: $red-main;
  color: white;
  text-decoration: none;
}

.btn-cont {
  color: $black-text;
}

.container {
  margin: 38px 14% 50px 14%;
}

header {
  display: flex;
  justify-content: space-between;
  img {
    width: 197px;
    height: 54px;
  }
  ul {
    li:not(:last-child) {
      margin-left: 30px;
    }
    li {
      display: inline;
      a {
        text-decoration: none;
        color: $gray-text;
      }
    }
  }
  .btn-cta {
    margin-left: 50px;
  }
}
</style>
