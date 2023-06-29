# prot_demo
1. 安裝相依套件，pip install -r requirements.txt
2. 進去路徑後，python main.py即可

# 如果要用GCP建立demo版
1. git clone相關程式
2. 進去資料夾後 gcloud builds submit --tag gcr.io/${GOOGLE_CLOUD_PROJECT}/prot_demo:202305 .
3. cloud run部署 container