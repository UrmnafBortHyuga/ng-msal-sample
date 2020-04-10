#!/bin/sh

ng g component recall-information-list --project=customer-relationship
ng g service recall-information-list/recall-information-list --project=customer-relationship

ng g component recall-information-text-creation --project=customer-relationship
ng g service recall-information-text-creation/recall-information-text-creation --project=customer-relationship

ng g component implementation-status-by-recall-customer --project=customer-relationship
ng g service implementation-status-by-recall-customer/implementation-status-by-recall-customer --project=customer-relationship

ng g component recall-status-inquiry --project=customer-relationship
ng g service recall-status-inquiry/recall-status-inquiry --project=customer-relationship

ng g component recall-details --project=customer-relationship
ng g service recall-details/recall-details --project=customer-relationship

ng g component estimate-sale-of-goods --project=goods-estimation
ng g service estimate-sale-of-goods/estimate-sale-of-goods --project=goods-estimation

ng g component product-search-sale-of-goods --project=goods-estimation
ng g service product-search-sale-of-goods/product-search-sale-of-goods --project=goods-estimation

ng g component estimate-maintenance --project=after-service-estimation
ng g service estimate-maintenance/estimate-maintenance --project=after-service-estimation

ng g component rent-a-car-vehicle-maintenance-status-screen --project=after-service-estimation
ng g service rent-a-car-vehicle-maintenance-status-screen/rent-a-car-vehicle-maintenance-status-screen --project=after-service-estimation

ng g component other-contract --project=after-service-estimation
ng g service other-contract/other-contract --project=after-service-estimation

ng g component estimate-proxy-service --project=agent-service-estimation
ng g service estimate-proxy-service/estimate-proxy-service --project=agent-service-estimation

ng g component accepting-orders-list --project=order-acceptance
ng g service accepting-orders-list/accepting-orders-list --project=order-acceptance

ng g component accepting-orders-cancellation-reason --project=order-acceptance
ng g service accepting-orders-cancellation-reason/accepting-orders-cancellation-reason --project=order-acceptance

ng g component purchase-order-details --project=toyota-parts-distributor-order-and-stocking
ng g service purchase-order-details/purchase-order-details --project=toyota-parts-distributor-order-and-stocking

ng g component additional-order-entry --project=toyota-parts-distributor-order-and-stocking
ng g service additional-order-entry/additional-order-entry --project=toyota-parts-distributor-order-and-stocking

ng g component orders-joint-sales-list --project=toyota-parts-distributor-order-and-stocking
ng g service orders-joint-sales-list/orders-joint-sales-list --project=toyota-parts-distributor-order-and-stocking

ng g component purchase-list --project=toyota-parts-distributor-order-and-stocking
ng g service purchase-list/purchase-list --project=toyota-parts-distributor-order-and-stocking

ng g component purchase-input --project=toyota-parts-distributor-order-and-stocking
ng g service purchase-input/purchase-input --project=toyota-parts-distributor-order-and-stocking

ng g component purchase-order-details-other-than-joint-sales --project=supplier-order-and-stocking
ng g service purchase-order-details-other-than-joint-sales/purchase-order-details-other-than-joint-sales --project=supplier-order-and-stocking

ng g component orders-other-than-joint-sales-list --project=supplier-order-and-stocking
ng g service orders-other-than-joint-sales-list/orders-other-than-joint-sales-list --project=supplier-order-and-stocking

ng g component inventory-stock-quantity-setting-list --project=inventory
ng g service inventory-stock-quantity-setting-list/inventory-stock-quantity-setting-list --project=inventory

ng g component inventory-list --project=inventory
ng g service inventory-list/inventory-list --project=inventory

ng g component other-stores-joint-sales-inventory-inquiry-screen --project=inventory
ng g service other-stores-joint-sales-inventory-inquiry-screen/other-stores-joint-sales-inventory-inquiry-screen --project=inventory

ng g component move-registration --project=inventory
ng g service move-registration/move-registration --project=inventory

ng g component individual-management-product-selection --project=inventory
ng g service individual-management-product-selection/individual-management-product-selection --project=inventory

ng g component selling-product-setting --project=inventory
ng g service selling-product-setting/selling-product-setting --project=inventory

ng g component consignment-list --project=outsourcing
ng g service consignment-list/consignment-list --project=outsourcing

ng g component consignment-details --project=outsourcing
ng g service consignment-details/consignment-details --project=outsourcing

ng g component acceptance-details --project=outsourcing
ng g service acceptance-details/acceptance-details --project=outsourcing

ng g component receive-consignment-list --project=outsourcing
ng g service receive-consignment-list/receive-consignment-list --project=outsourcing

ng g component receive-consignment-details --project=outsourcing
ng g service receive-consignment-details/receive-consignment-details --project=outsourcing

ng g component delivery-list --project=delivery
ng g service delivery-list/delivery-list --project=delivery

ng g component business-list --project=sales
ng g service business-list/business-list --project=sales

ng g component business-details --project=sales
ng g service business-details/business-details --project=sales

