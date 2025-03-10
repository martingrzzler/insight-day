<p align="center"><a href="https://additive.eu" target="_blank"><img src="https://additive-trial-day.s3.eu-central-1.amazonaws.com/logo.png" width="400"></a></p>

# 02 SQL (PostgreSQL)

Given the following Database:

Host: `ec2-108-128-249-68.eu-west-1.compute.amazonaws.com`

Port: `5432`

User: `trial-day`

PW: `p23be8fa51d0bb009ab27cf97242c179ac982eae25957769a2117a0642fcc7696`

Database: `dbem6ff3g5orbe`

Schema: `trial`

With it's tables

- organizations
- products
- orders

# Queries

Write a query to:

- get the total amount (amount_to_pay) of all orders per organisation per year ordered by year descending

  #### Expected Result:

  | Organization   | Year | Amount |
  | -------------- | ---- | ------ |
  | Testhotel Post | 2021 | 123    |
  | ...            | ...  | ...    |

Solution:

```sql
SELECT organizations.name as Organization, EXTRACT(YEAR FROM created_at) AS Year, SUM(amount_to_pay) AS Amount
FROM orders
JOIN organizations ON orders.organization_id = organizations.id
GROUP BY EXTRACT(YEAR FROM created_at), organizations.name ORDER BY Year DESC ;
```

---

- Get all organizations with at least 70 orders in the current year

  #### Expected Result:

  | Organization   | Count |
  | -------------- | ----- |
  | Testhotel Post | 123   |
  | ...            | ...   |

Solution:

```sql
SELECT organizations.name, count(*) AS Count
FROM orders
         JOIN organizations ON organization_id = organizations.id
WHERE extract(year from created_at) = extract(year from now())
GROUP BY organizations.name HAVING  count(*) >= 70;
```

---

Add your queries to this document and push to your fork at the end to complete your work.

## Bonus

- Do some further analysis
- get the most sold product per organisation

  #### Expected Result:

  | Organization   | Product Name                        | Count |
  | -------------- | ----------------------------------- | ----- |
  | Testhotel Post | Übernachtungsgutschein Einzelzimmer | 123   |
  | ...            | ...                                 | ...   |

Solution:

```sql
SELECT DISTINCT ON (organizations.name)
    organizations.name AS Organization,
    products.name AS Product_Name,
    COUNT(*) AS Count
FROM orders
JOIN organizations ON orders.organization_id = organizations.id
JOIN products ON orders.product_id = products.id
GROUP BY organizations.name, products.name
ORDER BY organizations.name, Count DESC;
```

---
