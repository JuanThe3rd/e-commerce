from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

class Account(db.Model, SerializerMixin):
    __tablename__ = 'accounts'

    id = db.Column(db.Integer, primary_key=True)
    account_type = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)
    firstname = db.Column(db.String, nullable=False)
    lastname = db.Column(db.String, nullable=False)

    orders = db.relationship('Order', cascade='all, delete', backref='account')

    serialize_rules = ('-orders.account')
    
    def to_dict(self):
        return {
            'id': self.id,
            'account_type': self.account_type,
            'email': self.email,
            'password': self.password,
            'firstname': self.firstname,
            'lastname': self.lastname
        }
    
    def __repr__(self):
        return f'<Account Name: {self.firstname} {self.lastname} />'
    
class OrderProductAssociation(db.Model, SerializerMixin):
    __tablename__ = 'order_product_associations'

    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('orders.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))

    serialize_rules = ('-order.order_product_associations', '-product.order_product_associations')

    def to_dict(self):
        return {
            'id': self.id,
            'order_id': self.order_id,
            'product_id': self.product_id
        }
    
    def __repr__(self):
        return f'<OrderProductsJoin Order_id: {self.order_id}, Product_id: {self.product_id} />'

class Product(db.Model, SerializerMixin):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    category = db.Column(db.String, nullable=False)
    price = db.Column(db.Float, nullable=False)
    image = db.Column(db.String, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'category': self.category,
            'price': self.price,
            'image': self.image
        }
    
    def __repr__(self):
        return f'<Product: {self.name} />'

class Order(db.Model, SerializerMixin):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    account_id = db.Column(db.Integer, db.ForeignKey('accounts.id'))
    total = db.Column(db.Float, nullable=False)

    products = db.relationship('Product', secondary=OrderProductAssociation.__table__, backref='order')

    serialize_rules = ('-products.order', '-account.orders')

    def to_dict(self):
        return {
            'id': self.id,
            'account_id': self.account_id,
            'total': self.total
        }
    
    def __repr__(self):
        return f'<Order To: {self.account.firstname} {self.account.lastname} Total: {self.total} />'

