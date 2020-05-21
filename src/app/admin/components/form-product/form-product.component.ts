import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { ProductsService } from '../../../core/services/products/products.service';
import { Router } from '@angular/router';
import { map, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  imageURL$: Observable<any>;

  constructor(private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private fireStorage: AngularFireStorage) {
    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      const product = this.form.value;

      this.productsService.createProduct(product)
        .subscribe(() => {
          this.router.navigate(['/admin/products'])
        });
    }
  }

  uploadFile(event) {
    const file = event.target.files[0];

    const name = file.name;
    const fileRef = this.fireStorage.ref(name);
    const task = this.fireStorage.upload(name, file);

    task.snapshotChanges().pipe(
      finalize(() => {
        this.imageURL$ = fileRef.getDownloadURL();
        this.imageURL$.subscribe(url => {
          this.form.get('image').setValue(url);
        });
      })
    ).subscribe();

    console.log(file);

  }
}
