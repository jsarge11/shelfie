update shelfie_product_table
set name = $1,
    price = $2,
    img_url = $3
where product_id = $4;