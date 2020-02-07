select * from order_items oi
join cust_products cp on oi.product_id = cp.product_id
where oi.customer_order_id = $1;