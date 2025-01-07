<?php

namespace Database\Seeders;

use App\Models\News;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        News::insert([
            [
                "title" => "Kerajinan Tangan Nusantara: Dari Tenun hingga Ukiran",
                "slug" => Str::slug("Kerajinan Tangan Nusantara: Dari Tenun hingga Ukiran 2"),
                "description" => "Kerajinan tangan Indonesia mencerminkan kreativitas dan keindahan budaya lokal.",
                "created_at" => now(),
                "body" => '<p>Kerajinan tangan seperti tenun dari Nusa Tenggara Timur, ukiran Jepara, dan anyaman bambu dari Kalimantan adalah bukti kreativitas masyarakat Indonesia yang mengakar pada budaya lokal.</p><p>Produk-produk ini kini semakin diminati di pasar internasional, menunjukkan bahwa tradisi lokal memiliki nilai ekonomi yang tinggi.</p>',
                "cover" => "https://images.unsplash.com/photo-1644080144721-3837d0a02fcb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
            [
                "title" => "Melestarikan Warisan Nusantara: Kekayaan Budaya yang Tak Ternilai",
                "slug" => Str::slug("Melestarikan Warisan Nusantara: Kekayaan Budaya yang Tak Ternilai"),
                "description" => "Melestarikan Warisan Nusantara: Kekayaan Budaya yang Tak Ternilai",
                "created_at" => now(),
                "body" => '<p>Indonesia, dengan lebih dari 17.000 pulau dan ratusan suku bangsa, menjadi rumah bagi beragam budaya yang mencerminkan kekayaan sejarah dan tradisi lokal. Kekayaan budaya Nusantara ini tak hanya terlihat dari seni tari seperti Tari Kecak Bali atau Tari Saman dari Aceh, tetapi juga dari kerajinan tradisional seperti batik, tenun, dan ukiran Jepara.</p><p>Namun, di era modernisasi, tantangan untuk melestarikan budaya ini semakin besar. Generasi muda cenderung lebih tertarik pada budaya global yang hadir melalui media sosial dan teknologi. Hal ini menyebabkan beberapa tradisi perlahan terlupakan, bahkan ada yang nyaris punah. Contohnya, beberapa bahasa daerah kini mulai ditinggalkan karena kurangnya generasi yang mampu berbicara dalam bahasa tersebut.</p><p>Untuk mengatasi tantangan ini, berbagai komunitas dan pemerintah mulai mengambil langkah konkret. Festival budaya, workshop seni, dan pelatihan tradisional menjadi program rutin di beberapa daerah untuk memperkenalkan budaya Nusantara kepada generasi muda. Tak hanya itu, teknologi juga mulai dimanfaatkan untuk mendokumentasikan dan mempromosikan budaya lokal. Misalnya, aplikasi digital yang mengenalkan bahasa daerah atau platform media sosial untuk mempopulerkan seni tradisional.</p><p>"Budaya adalah identitas bangsa. Jika kita kehilangan budaya kita, maka kita kehilangan jati diri kita," ujar Dian, seorang pegiat budaya dari Yogyakarta.</p><p>Upaya ini diharapkan dapat menjaga warisan Nusantara agar tetap hidup dan relevan di tengah arus globalisasi. Karena, sebagaimana pepatah lama mengatakan, "Tak kenal maka tak sayang." Mencintai budaya Nusantara adalah cara kita menjaga akar kita sebagai bangsa Indonesia.</p>',
                "cover" => "https://images.unsplash.com/photo-1610893889445-884ecab2ac7b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
            [
                "title" => "Tari Tradisional Nusantara: Warisan Leluhur yang Penuh Makna",
                "slug" => Str::slug("Tari Tradisional Nusantara: Warisan Leluhur yang Penuh Makna"),
                "description" => "Tari tradisional merupakan salah satu kekayaan budaya Nusantara yang penuh makna dan filosofi.",
                "created_at" => now(),
                "body" => '<p>Indonesia memiliki beragam tari tradisional seperti Tari Saman dari Aceh, Tari Piring dari Sumatera Barat, dan Tari Kecak dari Bali. Setiap tarian ini tidak hanya sebagai hiburan, tetapi juga memiliki makna mendalam yang mencerminkan tradisi dan kehidupan masyarakat setempat.</p><p>Dengan modernisasi, tarian tradisional harus tetap diajarkan kepada generasi muda agar tidak hilang oleh waktu.</p>',
                "cover" => "https://images.unsplash.com/photo-1567007044333-b0ddf0d2f76b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
            [
                "title" => "Batik Nusantara: Seni yang Diakui Dunia",
                "slug" => Str::slug("Batik Nusantara: Seni yang Diakui Dunia"),
                "description" => "Batik adalah warisan budaya yang telah diakui sebagai Warisan Budaya Takbenda oleh UNESCO.",
                "created_at" => now(),
                "body" => '<p>Batik Indonesia memiliki berbagai motif yang mencerminkan nilai-nilai budaya dan tradisi. Contohnya, Batik Parang yang berasal dari Jawa Tengah menggambarkan semangat perjuangan.</p><p>Pada 2 Oktober 2009, UNESCO menetapkan batik sebagai Warisan Budaya Takbenda, menjadikannya kebanggaan bangsa Indonesia.</p>',
                "cover" => "https://images.unsplash.com/photo-1721361467569-f8edbf851f44?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
            [
                "title" => "Bahasa Daerah di Indonesia: Kekayaan yang Harus Dilestarikan",
                "slug" => Str::slug("Bahasa Daerah di Indonesia: Kekayaan yang Harus Dilestarikan"),
                "description" => "Bahasa daerah adalah identitas lokal yang perlu dijaga di tengah arus modernisasi.",
                "created_at" => now(),
                "body" => '<p>Indonesia memiliki lebih dari 700 bahasa daerah yang digunakan oleh masyarakat di berbagai daerah. Bahasa daerah menjadi simbol identitas dan alat komunikasi yang memperkaya keberagaman bangsa.</p><p>Namun, beberapa bahasa daerah mulai punah akibat kurangnya generasi muda yang menggunakannya. Upaya revitalisasi bahasa menjadi salah satu langkah penting yang harus dilakukan.</p>',
                "cover" => "https://images.unsplash.com/photo-1592882506634-345aa7f9de00?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
            [
                "title" => "Kuliner Tradisional Nusantara: Cita Rasa yang Mendunia",
                "slug" => Str::slug("Kuliner Tradisional Nusantara: Cita Rasa yang Mendunia"),
                "description" => "Kuliner tradisional Indonesia menjadi salah satu daya tarik yang mendunia.",
                "created_at" => now(),
                "body" => '<p>Dari rendang yang dinobatkan sebagai makanan terenak di dunia hingga sate dan nasi goreng yang selalu menjadi favorit, kuliner tradisional Indonesia memiliki cita rasa yang khas dan kaya rempah.</p><p>Promosi kuliner melalui festival makanan dan media sosial membantu memperkenalkan cita rasa Nusantara ke kancah internasional.</p>',
                "cover" => "https://images.unsplash.com/photo-1717940947970-041b231a9eb6?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
            [
                "title" => "Kerajinan Tangan Nusantara: Dari Tenun hingga Ukiran",
                "slug" => Str::slug("Kerajinan Tangan Nusantara: Dari Tenun hingga Ukiran"),
                "description" => "Kerajinan tangan Indonesia mencerminkan kreativitas dan keindahan budaya lokal.",
                "created_at" => now(),
                "body" => '<p>Kerajinan tangan seperti tenun dari Nusa Tenggara Timur, ukiran Jepara, dan anyaman bambu dari Kalimantan adalah bukti kreativitas masyarakat Indonesia yang mengakar pada budaya lokal.</p><p>Produk-produk ini kini semakin diminati di pasar internasional, menunjukkan bahwa tradisi lokal memiliki nilai ekonomi yang tinggi.</p>',
                "cover" => "https://images.unsplash.com/photo-1644080144721-3837d0a02fcb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
        ]);        
    }
}
