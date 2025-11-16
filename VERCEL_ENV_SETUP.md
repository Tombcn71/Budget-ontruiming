# Vercel Environment Variables Setup

## ⚠️ BELANGRIJK: Voeg deze 3 environment variables toe in Vercel

### Stappen:
1. Ga naar https://vercel.com/dashboard
2. Klik op je project "budget-ontruiming"
3. Ga naar **Settings** → **Environment Variables**
4. Voeg deze 3 variables toe:

---

### 1️⃣ OPENAI_API_KEY
- **Name:** `OPENAI_API_KEY`
- **Value:** `sk-proj-...` (je OpenAI API key - krijg je van https://platform.openai.com/api-keys)
- **Environments:** ✅ Production ✅ Preview ✅ Development

---

### 2️⃣ BLOB_READ_WRITE_TOKEN
- **Name:** `BLOB_READ_WRITE_TOKEN`
- **Value:** Krijg je van Vercel Blob:
  1. Ga naar https://vercel.com/dashboard
  2. Klik op je project
  3. Ga naar **Storage** → **Create Database** → **Blob**
  4. Kopieer de token

Of gebruik deze als je al een Blob store hebt:
- Check in je Vercel dashboard onder Storage → Blob

---

### 3️⃣ RESEND_API_KEY
- **Name:** `RESEND_API_KEY`
- **Value:** `re_...` (je Resend API key - krijg je van https://resend.com/api-keys)
- **Environments:** ✅ Production ✅ Preview ✅ Development

---

## ✅ Na het toevoegen:

1. **Redeploy** je project:
   - Ga naar **Deployments**
   - Klik op de laatste deployment → "..." → **Redeploy**

2. **Of push een nieuwe commit:**
   ```bash
   cd /Users/tom/Budget-ontruiming
   git add .
   git commit -m "Update environment variables setup"
   git push
   ```

---

## 🔍 Test daarna:
- Upload 3 foto's in het formulier
- Klik "Bereken Prijs"
- Check of AI analyse werkt
- Check of email binnenkomt

---

**Let op:** Zonder deze environment variables werken:
- ❌ Foto uploads niet (BLOB_READ_WRITE_TOKEN)
- ❌ AI analyse niet (OPENAI_API_KEY)
- ❌ Email notificaties niet (RESEND_API_KEY)

