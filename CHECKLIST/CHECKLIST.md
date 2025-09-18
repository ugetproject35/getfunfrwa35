# ✅ 部署 & 測試清單

## 合約
- [ ] 部署 NodeContract（usdt, adminWallet）
- [ ] 部署 InvestmentContract（usdt, adminWallet, nodePool）
- [ ] 測試：投資/ROI 3%/150%封頂/20%進 nodePool
- [ ] 測試：claimROI 觸發 20 層 matching（依 Rank 限制）
- [ ] 測試：所有提現扣 5% 手續費

## User 前端
- [ ] 連接錢包、顯示地址
- [ ] 投資（10 的倍數），顯示 ROI、可領金額
- [ ] 生成/解析推薦 URL（?ref=）
- [ ] Node：購買份數、查 pending、提現

## Admin 前端
- [ ] 修改參數（ROI%、封頂%、手續費、最小額度）
- [ ] 幫用戶設定 Rank（永久）但需 active
- [ ] 查看總池數據、提領管理費（如有）

## 最終
- [ ] 域名綁定（www.getfund.site / adminrwa35.getfund.site）
- [ ] 主網小額實測 ✅
