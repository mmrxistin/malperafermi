// BismillahirRahmanirRahim
// El Hamdu Lillahi Rabbul Alemin
// Esselatu vesselamu ala rasulina Muhammedin .
// La ilahe ill Allah Muhammeden Rasulullah

const terms = [
  {
    title: "İman",
    meaning:
      "İman, Allah’a, melekelerine, kitaplarına, peygamberlerine, ahiret gününe ve kadere inanmakla tamamlanan bir teslimiyet ve güvendir.",
    source: "Kur’an 2:285; Kur’an 4:136."
  },
  {
    title: "İslam",
    meaning:
      "İslam, Allah’a teslim olmak, O’nun emir ve yasaklarına boyun eğmek ve O’nun rızasını hedef almaktır.",
    source: "Kur’an 3:19, 3:83; Sahih-i Müslim, Kitâbü’l-İmân, 8."
  },
  {
    title: "İbadet",
    meaning:
      "İbadet, kulun Rabbine olan yönelmesini ifade eder; namaz, zekât, oruç, hac ve bütün güzel davranışlar bu yönelimin şeklini alabilir.",
    source: "Kur’an 51:56; Kur’an 2:110; Sahih-i Buhari, Kitâbü’l-İmân, 8."
  },
  {
    title: "Şûrâ",
    meaning:
      "Demokrasinin İslami karşılığı şûrâdır: Müslümanlar, Allah’ın hükümlerini esas alarak, birbirleriyle danışarak karar verirler. Şura, çoğunluğun saltanat kurması değil, hakkı ve maslahatları gözeten bir istişare şeklidir.",
    source: "Kur’an 3:159; Kur’an 42:38."
  },
  {
    title: "Adalet",
    meaning:
      "Adalet, hak ve doğruya uygun davranmaktır. İslam, insanları Allah’ın rızasına uygun biçimde eşit ve hakkaniyetle muamele etmeyi emreder.",
    source: "Kur’an 16:90; Kur’an 4:58."
  },
  {
    title: "Hürriyet",
    meaning:
      "İslami hürriyet, insanın Allah’a ibadet etmesi ve başkasının hakkına saldırmaması için gerekli olan özgürlüktür. İslam, kişinin Allah’ın emirlerinden bağımsızlaşmasına izin vermez.",
    source: "Kur’an 2:256; Kur’an 6:107; Sahih-i Buhari, Kitâbü’l-İman, 1."
  },
  {
    title: "Siyaset",
    meaning:
      "Siyaset, insanları Allah’ın hükümlerine göre düzenleme ve toplumun düzenini gözetme çabasıdır. İslam’da siyasetin son amacı Allah’ın rızasını ve insanın iyiliğini korumaktır.",
    source: "Kur’an 4:58; Kur’an 5:8; Sahih-i Müslim, Kitâbü’l-İmâre, 1."
  },
  {
    title: "Millet",
    meaning:
      "Millet, Allah’ın dinine göre bir araya gelen ve ortak bir hedefe yönelen topluluktur. İslam, ümmetin birlik, yardım ve kardeşlik temelleri üzerine kurulmasını ister.",
    source: "Kur’an 21:92; Kur’an 23:52; Sahih-i Buhari, Kitâbü’l-İmân, 3."
  }
];

export default function IslamDictionaryPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="border-b border-white/10 bg-zinc-950 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#ff4d00]">
            Kur’an ve sahih sünnet ışığında
          </p>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            İslam Sözlüğü
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Bu sözlükteki her kavramın anlamı, Kur’an’ın ayetleri ve sahih sünnetin
            açık hükümleriyle açıklanmıştır. Modern bir kavramın kelime karşılığını
            Kur’an’a ve sünnete aykırı biçimde kurmak mümkün değildir.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-5xl gap-5">
          {terms.map((term) => (
            <article
              key={term.title}
              className="rounded-3xl border border-white/10 bg-zinc-900 p-7 sm:p-9"
            >
              <h2 className="text-2xl font-black text-[#ff4d00] sm:text-3xl">{term.title}</h2>
              <p className="mt-4 text-base leading-8 text-zinc-200 sm:text-lg">{term.meaning}</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-zinc-500">
                Kaynak: {term.source}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#ff4d00] p-8 text-zinc-950 sm:p-12">
          <h2 className="text-2xl font-black sm:text-4xl">Sözlük kuralı</h2>
          <p className="mt-4 text-base leading-8 sm:text-lg">
            Tanımlar yalnızca Kur’an ve sahih sünnete dayandırılır. Kur’an’ın bir ayeti
            veya sahih bir haberin açık anlamı dışında bir yorum, bu sözlükte yer almaz.
          </p>
        </div>
      </section>
    </main>
  );
}
