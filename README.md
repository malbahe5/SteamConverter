SteamConverter 💱 (Firefox Extension)
النسخة العربية

إضافة خفيفة ومخصصة لمتصفح فايرفوكس تقوم بتحويل أسعار الألعاب في متجر ستيم (Steam) من الدولار الأمريكي (USD) إلى الدينار البحريني (BHD) تلقائياً وبشكل فوري.

✨ المميزات
تحويل تلقائي ودقيق: يعتمد على سعر صرف ثابت (0.376) ويقرا الأسعار المكتوبة بالدولار ليضيف بجانبها السعر بالدينار البحريني (BHD).
تحديث ذكي: مزود بـ MutationObserver عشان يضمن إن الأسعار تتحدث وتتزامن تلقائياً حتى لو تغيرت الصفحة أو تنقلت داخل المتجر، بدون تكرار أو أخطاء.
خفيف نسبيًا: يعمل بكفاءة في الخلفية ولا يتدخل بمحتوى الصفحة غير أسعار الألعاب.
محدد الصلاحيات: يعمل فقط على نطاق متجر ستيم الرسمي (store.steampowered.com)، وما يجمع ولا يرسل أي بيانات.
📂 محتويات المشروع
manifest.json: إعدادات وبيانات الإضافة (Manifest V3).
content.js: السكريبت المسؤول عن رصد النصوص، استخراج الأسعار، وتحويلها لـ BHD.
📥 طريقة التثبيت في فايرفوكس

⚠️ ملاحظة: الطريقة أدناه تحمّل الإضافة بشكل مؤقت وتُحذف تلقائيًا عند إغلاق فايرفوكس. للتثبيت الدائم، الإضافة لازم تُنشر عبر متجر إضافات فايرفوكس الرسمي (AMO) أو تُوقَّع باستخدام web-ext sign.

قم بتحميل أو استنساخ ملفات المستودع (Clone / Download ZIP).
افتح متصفح فايرفوكس واكتب في شريط العناوين: about:debugging
اضغط على خيار This Firefox من القائمة الجانبية.
اضغط على زر Load Temporary Add-on...
اختر ملف manifest.json من داخل مجلد المشروع.
English Version

A lightweight and custom Firefox extension that automatically converts game prices on the Steam store from US Dollars (USD) to Bahraini Dinars (BHD) in real-time.

✨ Features
Automatic & Accurate Conversion: Uses a fixed exchange rate (0.376) to parse USD prices on the page and append the equivalent BHD value.
Smart Mutation Observer: Automatically re-computes prices on dynamic page changes or navigation updates without duplicating or breaking values.
Reasonably Lightweight: Runs efficiently in the background and only touches game price text.
Scoped Permissions: Strictly restricted to run only on the official Steam store domain (store.steampowered.com), with no data collection or transmission.
📂 Project Files
manifest.json: Extension configuration and metadata (Manifest V3).
content.js: The core script responsible for DOM text walking, price extraction, and conversion.
📥 Installation in Firefox

⚠️ Note: The steps below load the extension temporarily — it will be removed automatically when Firefox is closed. For a permanent install, the extension needs to be published on the official Firefox Add-ons store (AMO) or signed via web-ext sign.

Download or clone this repository.
Open Firefox and navigate to about:debugging.
Click on This Firefox from the left sidebar.
Click the Load Temporary Add-on... button.
Select the manifest.json file from your project directory.
