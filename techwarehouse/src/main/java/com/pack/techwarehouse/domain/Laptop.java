package com.pack.techwarehouse.domain;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
@Entity
public class Laptop 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String brand, model, color, serialNumber;

	private int modelYear, price;

	public Laptop() 
	{
	}
	public Laptop(String brand, String model, String color, String serialNumber, int modelYear, int price, Owner owner) {
		super();
		this.brand = brand;
		this.model = model;
		this.color = color;
		this.serialNumber = serialNumber;
		this.modelYear = modelYear;
		this.price = price;
		this.owner = owner;
	}
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ownerid")
	private Owner owner;
	public Owner getOwner() 
	{
		return owner;
	}
	public void setOwner(Owner owner) 
	{
		this.owner = owner;
	}
	public Long getId() 
	{
		return id;
	}
	public void setId(Long id) 
	{
		this.id = id;
	}
	public String getBrand() 
	{
		return brand;
	}
	public void setBrand(String brand) 
	{
		this.brand = brand;
	}
	public String getModel() 
	{
		return model;
	}
	public void setModel(String model)
	{
		this.model = model;
	}
	public String getColor()
	{
		return color;
	}
	public void setColor(String color) 
	{
		this.color = color;
	}
	public String getserialNumber() 
	{
		return serialNumber;
	}
	public void setRegistrationNumber(String serialNumber) 
	{
		this.serialNumber = serialNumber;
	}
	public int getModelYear() 
	{
		return modelYear;
	}
	public void setModelYear(int modelYear) 
	{
		this.modelYear = modelYear;
	}
	public int getPrice() 
	{
		return price;
	}
	public void setPrice(int price) 
	{
		this.price = price;
	}
}