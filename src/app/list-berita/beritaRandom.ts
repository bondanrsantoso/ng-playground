export function generateListBerita(length = 15) {
  const titles = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolore quaerat, laboriosam maxime fuga totam delectus ea error iste hic ex officiis a explicabo. Vero incidunt quam quaerat mollitia non?"
    .replace(/![A-z]/, "")
    .split(" ");
  const randomContents = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, temporibus dolore natus porro eum suscipit in excepturi ratione quia, beatae velit quasi libero quos pariatur aperiam eveniet iure, eius laboriosam!
      Culpa architecto facere, necessitatibus velit, hic quas, est ipsam tempora ratione impedit nesciunt? Ipsum molestias eveniet minima odit laudantium et, est modi ullam aspernatur quisquam in consectetur assumenda vero voluptates!
      Maxime sunt sit, accusantium possimus qui debitis rem, optio soluta consequatur amet omnis consectetur minus ipsa incidunt? Consectetur ut tenetur quisquam possimus eaque velit ad doloremque cupiditate vel! Esse, sapiente!
      Quaerat accusantium facere delectus obcaecati, deserunt ab, ipsam eius modi debitis recusandae cum ipsa laudantium praesentium, odit tempore dolores? Architecto, magnam repellendus ducimus ex repellat aut modi quae corporis error.
      Quibusdam, nobis culpa. Eos beatae voluptates numquam placeat debitis dicta facere alias labore facilis, reiciendis tempore officiis asperiores cum error ullam molestiae provident impedit sapiente mollitia molestias! Sit, veritatis dolor!
      Nihil ratione quod rem consequatur sapiente error animi natus, ipsa, illum earum eaque, odio delectus at. Maxime pariatur sequi modi voluptate voluptatem hic obcaecati ab fuga cupiditate nobis! Minus, numquam!
      Eum, adipisci. Quisquam nihil, officia voluptates accusamus soluta natus totam magni doloribus autem nisi? Quae sed molestias optio delectus ipsam ipsa suscipit pariatur eos explicabo, ut tenetur vitae atque quidem.
      Repellendus molestiae praesentium quam nihil dolore est inventore velit ullam recusandae quia doloremque ipsa repellat laboriosam explicabo asperiores totam maiores impedit animi vel unde voluptatibus, porro maxime tenetur magnam. Labore.
      A ea sunt iste, obcaecati culpa id voluptatem amet, consequatur dolorem beatae odio ipsa. Porro quasi perspiciatis nihil fuga, excepturi quaerat nobis nulla reprehenderit corrupti atque esse eaque. Eum, magnam.
      Ex, dignissimos ut. Accusamus rem commodi tempore, quae ab provident unde ipsa nemo saepe nihil esse error, at blanditiis minus inventore adipisci. Molestias aspernatur vitae neque quibusdam commodi dolorum sed!`.split(
    "\n"
  );

  const n = length;
  const articles = [];

  for (let i = 0; i < n; i++) {
    const articleLength = generateRandom(5, 20);
    const titleLength = generateRandom(2, 8);

    let title, article;

    let titleArr = [];
    for (let j = 0; j < titleLength; j++) {
      titleArr.push(titles[generateRandom(0, titles.length - 1)]);
    }
    title = titleArr.join(" ");

    let articleArr = [];
    for (let j = 0; j < articleLength; j++) {
      const paragraphLength = generateRandom(1, 5);
      let paragraphArr = [];
      for (let k = 0; k < paragraphLength; k++) {
        paragraphArr.push(randomContents[generateRandom(0, titles.length - 1)]);
      }
      articleArr.push(paragraphArr.join(" "));
    }
    article = articleArr.join("\n");

    articles.push({
      title,
      article
    });

    // try {
    //   const articleRef = db.collection("articles").doc();
    //   await articleRef.set({
    //     title,
    //     article
    //   });
    // } catch (error) {
    //   console.error(error);
    //   return res.status(500).send("ERRR");
    // }
  }
  return articles;
}

function generateRandom(min, max) {
  return Math.round(min + Math.random() * max);
}
