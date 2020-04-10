export class Menu {
  static readonly contents = [
  {
    domain: 'SD-001',
    domainId: 'customer-relationship',
    sites: [{
      name: 'リコール案内一覧',
      id: 'recall-information-list',
    }, {
      name: 'リコール案内文作成',
      id: 'recall-information-text-creation',
    }, {
      name: 'リコール顧客別実施状況',
      id: 'implementation-status-by-recall-customer',
    }, {
      name: 'リコール実施状況照会',
      id: 'recall-status-inquiry',
    }, {
      name: 'リコール対応 詳細',
      id: 'recall-details',
    }]
  }, {
    domain: 'SD-005',
    domainId: 'goods-estimation',
    sites: [{
      name: '見積作成（物品販売）',
      id: 'estimate-sale-of-goods',
    }, {
      name: '商品検索（物品販売）',
      id: 'product-search-sale-of-goods',
    }]
  }, {
    domain: 'SD-006',
    domainId: 'after-service-estimation',
    sites: [{
      name: '見積作成_整備',
      id: 'estimate-maintenance',
    }, {
      name: 'レンタリース車両整備状況画面',
      id: 'rent-a-car-vehicle-maintenance-status-screen',
    }, {
      name: '他契約',
      id: 'other-contract',
    }]
  }, {
    domain: 'SD-007',
    domainId: 'agent-service-estimation',
    sites: [{
      name: '見積作成（代行サービス）',
      id: 'estimate-proxy-service',
    }]
  }, {
    domain: 'SD-027',
    domainId: 'order-acceptance',
    sites: [{
      name: '受注一覧',
      id: 'accepting-orders-list',
    }, {
      name: '受注取消（理由入力）',
      id: 'accepting-orders-cancellation-reason',
    }]
  }, {
    domain: 'SD-030',
    domainId: 'toyota-parts-distributor-order-and-stocking',
    sites: [{
      name: '発注仕入詳細',
      id: 'purchase-order-details',
    }, {
      name: '追加発注入力',
      id: 'additional-order-entry',
    }, {
      name: '発注一覧（共販）',
      id: 'orders-joint-sales-list',
    }, {
      name: '仕入一覧',
      id: 'purchase-list',
    }, {
      name: '仕入入力',
      id: 'purchase-input',
    }]
  }, {
    domain: 'SD-031',
    domainId: 'supplier-order-and-stocking',
    sites: [{
      name: '発注仕入詳細_共販以外',
      id: 'purchase-order-details-other-than-joint-sales',
      }, {
      name: '発注一覧（共販以外）',
      id: 'orders-other-than-joint-sales-list',
    }]
  }, {
    domain: 'SD-041',
    domainId: 'inventory',
    sites: [{
      name: '在庫常備数設定一覧',
      id: 'inventory-stock-quantity-setting-list',
    }, {
      name: '在庫一覧',
      id: 'inventory-list',
    }, {
      name: '他店舗／共販在庫照会画面',
      id: 'other-stores-joint-sales-inventory-inquiry-screen',
    }, {
      name: '移動登録',
      id: 'move-registration',
    }, {
      name: '個体管理商品選択',
      id: 'individual-management-product-selection',
    }, {
      name: '売りたし商品設定',
      id: 'selling-product-setting',
    }]
  }, {
    domain: 'SD-071',
    domainId: 'outsourcing',
    sites: [{
      name: '作業委託選択',
      id: 'consignment-select',
    }, {
      name: '作業委託一覧',
      id: 'consignment-list',
    }, {
      name: '作業委託詳細',
      id: 'consignment-details',
    }, {
      name: '画像取込',
      id: 'image-capture',
    }, {
      name: '作業委託受領一覧',
      id: 'receive-consignment-list',
    }, {
      name: '作業委託回答',
      id: 'consignment-response',
    }, {
      name: '作業委託受領詳細',
      id: 'receive-consignment-details',
    }]
  }, {
    domain: 'SD-075',
    domainId: 'delivery',
    sites: [{
      name: '納品一覧',
      id: 'delivery-list',
    }]
  }, {
    domain: 'SD-076',
    domainId: 'sales',
    sites: [{
      name: '商談一覧',
      id: 'business-list',
    }, {
      name: '商談詳細',
      id: 'business-details',
    }]
  }];
}
